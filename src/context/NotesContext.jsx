import { createContext, useEffect, useState , useContext } from "react";
import { fetchNotes , createNotes , deleteNotes  } from "../api/notes.api";
import { AuthContext } from "./AuthContext";

export  const  NotesContext = createContext()

export const NotesProvider =  ({children}) => {
    
    const { isAuthenticated } = useContext(AuthContext);


    const [notes , setNotes] = useState([])
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)

    const loadNotes = async () => {
        try {
            
            setLoading(true);
            const data = await fetchNotes();

            setNotes(data.notes || [])
            
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    const addNote = async (formData) => {
        try {

            const data = await createNotes(formData)
            setNotes((prev) => [data.notes , ...prev]);
            
        } catch (error) {
            setError(error.message)
        }
    }

    const removeNote = async (id) => {
        try {

          await deleteNotes(id)
          setNotes((prev) => prev.filter((note) => note._id !== id ))
            
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        if (isAuthenticated) {
          loadNotes();
        }
      }, [isAuthenticated]);
      


    return (

        <NotesContext.Provider
           value={{
            notes,
            reloadNotes:loadNotes,
            loading,
            error,
            addNote,
            removeNote
           }}
        >
            
            {children}

        </NotesContext.Provider>
    )
}

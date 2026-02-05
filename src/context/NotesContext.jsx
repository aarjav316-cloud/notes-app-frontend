import { createContext, useEffect, useState , useContext } from "react";
import { fetchNotes } from "../api/notes.api";
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
            error
           }}
        >
            
            {children}

        </NotesContext.Provider>
    )
}

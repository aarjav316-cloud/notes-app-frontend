import React, { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'

function Notes() {

  const {notes , loading , error} = useContext(NotesContext);

  if(loading){
    return (
      <p className='p-6' >Loading notes..</p>
    )
  }

  if(error){
    return (
      <p className='p-6 text-red-400' >{error}</p>
    )
  }

  if(notes.length === 0){
    return <p className='p-6' >No notes yet. Start by adding one!</p>;
  }
  
  return (
    <div className="p-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" >
      
      {notes.map((note) => (
        
        <div key={note._id} className='p-4 rounded'>

          <h3 className='font-semibold mb-2' >{note.title}</h3>
          <p className='text-sm text-gray-600' >{note.content}</p>

        </div>
      ) )}

    </div>
  )
}

export default Notes


import Notes from './Notes';
import AddNote from './AddNote';




const NotesList = ({ notes,handleAddNote,handleDeleteNote,handleEditNote,currentDate}) => {
    function searchDateValue(){
//    console.log("Search")
   return notes.map((note)=> 
    {
      return <Notes key={note.id} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote} />
    })
}
 
    
    return (
        <>
        <div className="notes_list">
            <AddNote handleAddNote={handleAddNote}/>
            {
             searchDateValue()
            }
            
            
        </div>
        
        </>
    )
}

export default NotesList


import Notes from './Notes';
import AddNote from './AddNote';

const NotesList = ({ notes,handleAddNote,handleDeleteNote,handleEditNote,setisEdit, isEdit}) => {
    return (
        <>
        <div className="notes_list">
            {notes.map((note)=>(<Notes key={note.id} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote} setisEdit={setisEdit} isEdit={isEdit} />))}
            <AddNote handleAddNote={handleAddNote}/>
            
        </div>
        
        </>
    )
}

export default NotesList

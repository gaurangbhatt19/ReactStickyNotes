
import Notes from './Notes';
import AddNote from './AddNote';
import {selectorDate} from "../recoiljs/selectAtoms"
import { useRecoilValue } from 'recoil';
import {useEffect} from "react"


const NotesList = ({ notes,handleAddNote,handleDeleteNote,handleEditNote,setisEdit, isEdit,currentDate}) => {
    function searchDateValue(){
//    console.log("Search")
   return notes.map((note)=> 
    {
      return <Notes key={note.id} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote} />
    })
}
    const searchDate=useRecoilValue(selectorDate);
    
    return (
        <>
        <div className="notes_list">
            {
             searchDateValue()
            }
            <AddNote handleAddNote={handleAddNote}/>
            
        </div>
        
        </>
    )
}

export default NotesList

import {useState} from 'react'
const AddNote = ({handleAddNote}) => {
    const [noteText,setNoteText]=useState('');
    const handleChange = (event)=>{
        
        if(characterLimit-event.target.value.length>=0){
            setNoteText(event.target.value);
        }
    }
    const handleSaveClick=()=>{
        if(noteText.trim().length>0){
              handleAddNote(noteText);
              setNoteText("");
        }
      
    }
    var characterLimit=4000;
    return (
        <div className="notes new" id="add_note">
            <textarea rows="8" cols="10" placeholder="Add Note ....." onChange={handleChange} value={noteText}></textarea>
            <div className="note_footer">
                <small>{characterLimit - noteText.length} Characters Remaining...</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
            
        </div>
    )
}

export default AddNote;


import {MdDeleteForever} from 'react-icons/md'
import {AiFillSave} from 'react-icons/ai'
import{useRef} from "react"

const Notes = ({id,text,date,handleDeleteNote,handleEditNote,setisEdit,isEdit}) => {
    var editText=useRef()
    function getedittext(){
        console.log(editText.current.value)
        handleEditNote(id,editText.current.value)
       
    }

    
    return (
        <div className="notes">
           
            <textarea className="textareadata" ref={editText}  onChange={()=>{
            }}>{text}</textarea>
            
            <div className="note_footer">
                <small><strong>{date}</strong></small>
                <div className=" note_footer icons"> 
                <AiFillSave className="edit_icon" size="1.3em" onClick={()=>{
                     getedittext()
                }} />
                <MdDeleteForever className="delete_icon" size="1.3em" onClick={()=>handleDeleteNote(id)}/>
                
                </div>
            </div>
        </div>
    )
}

export default Notes;

import {MdDeleteForever} from 'react-icons/md'
import {AiFillSave} from 'react-icons/ai'
import{useRef} from "react"
import 'material-react-toastify/dist/ReactToastify.css';

const Notes = ({id,text,date,handleDeleteNote,handleEditNote}) => {
    var editText=useRef()
    var div=useRef()
    function getedittext(isClicked){
        handleEditNote(id,editText.current.value,isClicked)
    }
   
    return (
        <div className="notes" ref={div} name={"note_"+id}>
           
            <textarea className="textareadata" ref={editText}  onChange={()=>{
                getedittext(false)
            }}>{text}</textarea>
            
            <div className="note_footer">
                <small><strong>{date}</strong></small>
                <div className="note_footer icons"> 
                <AiFillSave className="edit_icon" size="1.3em" onClick={()=>{
                     getedittext(true) 
                }} />
               
                <MdDeleteForever className="delete_icon" size="1.3em" onClick={()=>{
                    handleDeleteNote(id)
                    }}/>
                
                </div>
            </div>
        </div>
    )
}

export default Notes;


import {MdDeleteForever} from 'react-icons/md'
import { cloneElement } from 'react';
import {AiFillSave} from 'react-icons/ai'
import{useRef} from "react"
// import { ToastContainer, toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

const Notes = ({id,text,date,handleDeleteNote,handleEditNote}) => {
    var editText=useRef()
    var div=useRef()
    function getedittext(textRef){
        handleEditNote(id,editText.current.value,textRef)
    }

    const notify=(text,type)=>{
        if(type==="save"){
            toast.success(text,{
            position:"bottom-right"
        })
        }
        else if(type==="delete"){
            toast.error(text,{
                position:"bottom-right"
            })
        }
        
    }

    return (
        <div className="notes" ref={div}>
           
            <textarea className="textareadata" ref={editText}  onChange={()=>{
            }}>{text}</textarea>
            
            <div className="note_footer">
                <small><strong>{date}</strong></small>
                <div className="note_footer icons"> 
                <ToastContainer draggable autoClose={1000}/>
                <AiFillSave className="edit_icon" size="1.3em" onClick={()=>{
                     getedittext(editText) 
                     notify("Note Saved Successfully !......","save")
                }} />
               
                <MdDeleteForever className="delete_icon" size="1.3em" onClick={()=>{
                    handleDeleteNote(id)
                    notify("Note Deleted Successfully !......","delete")
                    }}/>
                
                </div>
            </div>
        </div>
    )
}

export default Notes;

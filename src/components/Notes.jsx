
import { MdDeleteForever } from 'react-icons/md'

const Notes = ({id,text,date,handleDeleteNote}) => {
    return (
        <div className="notes">
            <span>{text}</span>
            <div className="note_footer">
                <small>{date}</small>
                <MdDeleteForever className="delete_icon" size="1.3em" onClick={()=>handleDeleteNote(id)}/>
            </div>
        </div>
    )
}

export default Notes;

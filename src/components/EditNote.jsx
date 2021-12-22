import React from 'react'
import AddNote from './AddNote'

const EditNote = ({data,editmenu}) => {
    if(editmenu){
    return (
        <div className="edit-note">
            <AddNote />
        </div>
    )
    }
}

export default EditNote

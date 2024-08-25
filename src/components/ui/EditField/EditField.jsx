import "./EditField.scss"
import { useState } from 'react'

const EditField = ({fun}) => {

    
    return (
        <input className="editfield" placeholder="Edit your task here"
         onChange={(e)=> fun(e.target.value)}/>
    )
}

export default EditField
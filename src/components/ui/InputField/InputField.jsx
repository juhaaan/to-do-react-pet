import "./InputField.scss"
import { useState } from 'react'

const InputField = ({fun, val}) => {

    
    return (
        <input className="inputfield" placeholder="Type in your task here"
         onChange={(e)=> fun(e.target.value)}
         value={val}/>
    )
}

export default InputField
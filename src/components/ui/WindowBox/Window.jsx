import InnerRow from "../DivRow/Row"
import "./Window.scss"
import Btn from '../Button/Button.jsx'
import { useState } from 'react'
import EditField from '../EditField/EditField.jsx'

const WindowBox = ({children, array, Del, Edit}) => {
    const [eddit,setEddit] = useState("")

    function changeEdit(word) {
        setEddit(word);
    }

    const divs = array.map((el) => (
        <li key={el.id} style={{color:"black", fontSize:"20px", marginBottom:"15px"}}>
           <div><input type="checkbox" style={{marginRight:"10px",height:"20px",width:"20pxm"}}/>
           {el.text}</div>
           <Btn click={()=> Del(el.id)} name="Delete">Del</Btn>
           <EditField fun={(word)=>changeEdit(word)}></EditField>
           <Btn click={()=> {Edit(el.id, eddit)
            changeEdit("")
           }} name="Edit">Edit</Btn>
       </li>
   ))
    



    return (
        

        <div className="box" style={{height:children}}>
            <ul>{divs}</ul>
        </div>
        
    )
}

export default WindowBox
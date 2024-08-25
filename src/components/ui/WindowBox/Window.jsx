import InnerRow from "../DivRow/Row"
import "./Window.scss"
import Btn from '../Button/Button.jsx'
import { useState } from 'react'

const WindowBox = ({children, array, Del, Edit}) => {
    const divs = array.map((el) => (
        <li key={el.id} style={{color:"black", fontSize:"20px", marginBottom:"15px"}}>
           <div><input type="checkbox" style={{marginRight:"10px",height:"20px",width:"20pxm"}}/>
           {el.text}</div>
           <Btn click={()=> {Del(el.id)
            console.log(el.id)}} name="Delete">Del</Btn>
           <Btn click={()=> Edit(el.id)} name="Edit">Edit</Btn>
       </li>
   ))
    



    return (
        

        <div className="box" style={{height:children}}>
            <ul>{divs}</ul>
        </div>
        
    )
}

export default WindowBox
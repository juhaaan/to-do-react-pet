import InnerRow from "../DivRow/Row"
import "./Window.scss"
import Btn from '../Button/Button.jsx'
import { useState } from 'react'

const WindowBox = ({children, array, co}) => {
    
    //const [divs,setDivs] = useState()
    
    const divs = array.map((el) => (
        <li key={el.id} style={{color:"black", fontSize:"20px", marginBottom:"15px"}}>
           <div><input type="checkbox" style={{marginRight:"10px",height:"20px",width:"20pxm"}}/>
           {el.text}</div>
           <Btn click={()=>handleDel(co)} name="Delete">Del</Btn>
           <Btn click={()=>handleEdit(co)} name="Edit">Edit</Btn>
       </li>
   ))
    


    /*function handleDel(i) {
        const temp = divs
        temp.splice(i-1,1)
        setDivs(temp)
    }*/

    function handleEdit() {
        console.log(divs)
    }
    console.log(divs)

    return (
        

        <div className="box" style={{height:children}}>
            <ul>{divs}</ul>
        </div>
        
    )
}

export default WindowBox
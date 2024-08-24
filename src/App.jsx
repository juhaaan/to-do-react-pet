import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderText from "./components/ui/Header/Header.jsx"
import WindowBox from './components/ui/WindowBox/Window.jsx'
import Btn from './components/ui/Button/Button.jsx'
import InputField from './components/ui/InputField/InputField.jsx'


function App() {
  const [input,setInput] = useState("")
  const [todolist, setTodolist] = useState([])
  const [count,setCount] = useState(0)

  function change(word) {
    setInput(word)
  }

  function handleAdd() {
    setCount(count+1)
    todolist.push({id:count, text:input})
    setTodolist(todolist)
    setInput("")
  }



  return (
    <div>
    <HeaderText></HeaderText>
    <WindowBox
    array={todolist}>400px
    co={count}
    </WindowBox>

    <div className="btnContainer">
      <InputField val={input} fun={(smth)=> change(smth)}></InputField>
      <Btn click={()=>handleAdd()} name="Add">left</Btn>
    </div>
    </div>
  )
}

export default App

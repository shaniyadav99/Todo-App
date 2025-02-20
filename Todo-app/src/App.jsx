import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("")
  const [todos,setTodo]=useState([])
  function GetValue(e){
    setValue(e.target.value)
  }
  function Onclk(){
    setTodo([...todos,value])
    console.log(todos)
  }
  return (
    <>
    <input onChange={GetValue} type="text" placeholder='Enter the task' />
    <button onClick={Onclk}>Add Task</button>
    <ul>{todos.map((prod)=>(<li>{prod}</li>
    ))}</ul>
    </>
  )
}

export default App

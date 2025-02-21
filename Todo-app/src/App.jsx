import { useState } from 'react'
import './App.css'
import UserForm from './Form.jsx'
import ApiTodo from './ApiTodo.jsx'

function App() {
  const [value, setValue] = useState("")
  const [todos,setTodo]=useState([])
  function GetValue(e){
    setValue(e.target.value)
  }
  function Onclk(){
    setTodo([...todos,value])
  }
  function HandleOndel(id){
    let upadatedList=todos.filter((el,index)=>(
      index!==id
    ))
    setTodo(upadatedList)
  }
  return (
    <>
    <input onChange={GetValue} type="email" placeholder='Enter the task' />
    <button onClick={Onclk}>Add Task</button>
    <ul>{todos.map((prod,index)=>(<li>{prod}
      
      <button onClick={()=>HandleOndel(index)}>Delete</button>
    </li>
    ))}</ul>
    <UserForm/>
    <ApiTodo/>
    </>
  )
}

export default App

import axios from 'axios';
import { useState,useEffect } from 'react'
import AddTodo from './AddTodo';
function ApiTodo(){
    const [data,setdata]=useState([])
   async function fetch(params) {
    let res=await axios.get('https://jsonplaceholder.typicode.com/todos')
        setdata(res.data)
   } 
   useEffect(()=>{
    fetch()
   },[])
    return (
        <>
        <AddTodo val={data}/>
        </>
    );
}
export default ApiTodo;
import { useState } from "react";

function UserForm(){
    const [data,setdata]=useState({userName:"" , userEmail:""});
    function handleEvent(e){
        const {name,value}=e.target;
        setdata({...data,[name]:value})
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(data.userEmail);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleEvent}  name="userName" type="text" placeholder="Enter Name" />
            <input onChange={handleEvent} name="userEmail" type="text" placeholder="Enter Email" />
            <button>Submit</button>
        </form>
        </>
    );
}
export default UserForm;
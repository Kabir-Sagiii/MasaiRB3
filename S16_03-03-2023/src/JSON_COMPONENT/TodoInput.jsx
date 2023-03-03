import {useState} from 'react';
import Todo from './Todo';
import { useDispatch } from 'react-redux';

function TodoInput(props) {
    const [state,setState] = useState("")
    const dispatch = useDispatch()

    const getUserData = ()=>{
        fetch("http://localhost:5001/results")
        .then((res)=>res.json())
        .then((data)=>{
         // console.log(data)

              dispatch({
                 type:"JSON-TODO",
                 payload:data
              })
     
     })
   }

    const addUser = ()=>{
        fetch("http://localhost:5001/results",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "name":state
            })
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            getUserData()

        })
    }


    return (
        <div>
            <h2>New User</h2>
             <input value={state} onChange={(e)=>{setState(e.target.value)}} type="text" placeholder='Enter User'/>
             <button onClick={addUser}>Send</button>
             <Todo getUserData={getUserData} />

        </div>
    );
}

export default TodoInput;
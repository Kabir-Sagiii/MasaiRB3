import {useState} from 'react';
import Todo from './Todo';
import { useDispatch } from 'react-redux';
// import reduxThunk from '../Redux-Thunk/thunk';
import thunkActionCreator from '../Redux-Thunk/thunk';

function TodoInput(props) {
    const [state,setState] = useState("")
    const dispatch = useDispatch()

   

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
            // console.log(data)
           
                //  reduxThunk() // we should not call redux thunk directly from the application logic
                //   dispatch(reduxThunk)

                dispatch(thunkActionCreator())
            })
    }
    

    return (
        <div>
            <h2>New User</h2>
             <input value={state} onChange={(e)=>{setState(e.target.value)}} type="text" placeholder='Enter User'/>
             <button onClick={addUser}>Send</button>
             <Todo  />

        </div>
    );
}

export default TodoInput;
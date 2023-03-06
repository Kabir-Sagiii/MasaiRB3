import {useState} from 'react'
import myStore from "../Redux/Store"
import {useDispatch} from 'react-redux'
import { TODO } from '../Redux/ActionTypes'
import { todoAction } from '../Redux/Action'

var basicStyle = {
    boxShadow:"0 0 10px black",
    padding:"60px",
    width:"300px",
    margin:"100px auto",
    textAlign:"center"
}
function Todo(){
      const [state,setState] = useState("")
      let dispatch = useDispatch()

      const sendDataToStore = ()=>{
               //  myStore.dispatch({
               //      type:"todo",
               //      payload:state
               //  })

               //  dispatch({
               //      type:TODO,
               //      payload:state
               //  })

               dispatch(todoAction(state))
      }

     return <div style={basicStyle}>
          <h2>Todo App</h2>
          <input type="text" placeholder="Enter Some Text" 
           onChange={(e)=>{setState(e.target.value)}}
          />
          <button onClick={sendDataToStore}>Submit</button>
     </div>

}

export default Todo
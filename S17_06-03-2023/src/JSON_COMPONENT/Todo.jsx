
  import {useEffect} from 'react';
  import {useDispatch,useSelector} from 'react-redux'
  // import reduxThunk from '../Redux-Thunk/thunk';
  import thunkActionCreator from '../Redux-Thunk/thunk';
  
  function Todo() {
     const dispatch = useDispatch()
    let storeData = useSelector((store)=>{
          return store.todo
    })
   
      useEffect(()=>{
          // dispatch(reduxThunk)
          dispatch(thunkActionCreator())
      },[])

   const deleteUser = (id)=>{
         fetch(`http://localhost:5001/results/${id}`,{
            "method":"DELETE",
            "Content-Type":"application/json"
         }).then((res)=>res.json())
         .then(()=>{
          // dispatch(reduxThunk)
          dispatch(thunkActionCreator())
         })
   }

      
    return (
        <div>
            <h3>User Information</h3>
            {
                storeData.length > 0 ?  <div> 
                     {
                        storeData.map((todo)=>{
                         return <div style={{margin:"20px"}}>  

                            <span>{todo.name}</span>&nbsp;&nbsp;&nbsp;
                            <button onClick={()=>{deleteUser(todo.id)}}>delete</button>
                         </div>
                        })
                     }
                     </div> :<h2>Data is Not Available</h2>
            }
        </div>
    );
  }
  
  export default Todo;
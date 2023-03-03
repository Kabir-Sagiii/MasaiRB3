
  import {useEffect} from 'react';
  import {useDispatch,useSelector} from 'react-redux'
  
  function Todo({getUserData}) {
    let storeData = useSelector((store)=>{
          return store.todo
    })
   
      useEffect(()=>{
        getUserData()
      },[])

   const deleteUser = (id)=>{
         fetch(`http://localhost:5001/results/${id}`,{
            "method":"DELETE",
            "Content-Type":"application/json"
         }).then((res)=>res.json())
         .then(()=>{
             getUserData()
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
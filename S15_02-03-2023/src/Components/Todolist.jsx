import {useSelector} from 'react-redux'

function Todolist(){
    let data= useSelector((storedata)=>{
                    return storedata.todoReducer.todo
               })

    return <div>
         <h2>Todo List</h2>
         {
            data.map((ele,i)=>{
               return <div style={{width:"300px",margin:"10px auto",}}>
                  <span key={i+1}>{ele}</span>&nbsp;&nbsp;
                   <button style={{padding:"5px 10px"}}>Delete</button>  
                   </div>
            })
         }
    </div>

}

export default Todolist
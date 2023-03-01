import {useSelector} from 'react-redux'

function Todolist(){
    let data= useSelector((storedata)=>{
                    return storedata.todo
               })

    return <div>
         <h2>Todo List</h2>
         {
            data.map((ele,i)=>{
               return <p key={i+1}>{ele}</p>
            })
         }
    </div>

}

export default Todolist
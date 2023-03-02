import { useSelector,useDispatch } from "react-redux"
var basicStyle = {
    boxShadow:"0 0 10px black",
    padding:"60px",
    width:"300px",
    margin:"100px auto",
    textAlign:"center"
}
function Counter(){
           const dispatch = useDispatch()
           let countValue  =  useSelector((Storedata)=>{  // {todoReducer:{},cReducer:{count:100}}
                       return Storedata.cReducer.count
                      })

        const increment = ()=>{
                       dispatch({
                        type:"INCREMENT",
                        payload:1
                       }) 
                      }

        const decrement = ()=>{
                dispatch({
                    type:"DECREMENT",
                    payload:5
                })
        }

    return <div style={basicStyle}>
           <h2>Counter Value is <span style={{color:"red"}}>{countValue}</span></h2>
           <button onClick={increment}>Inc</button>&nbsp;&nbsp;

           <button onClick={decrement}>Dec</button>
    </div>
}

export default Counter
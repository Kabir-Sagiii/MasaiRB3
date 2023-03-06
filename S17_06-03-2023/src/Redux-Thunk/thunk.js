const getUserData = (dispatch)=>{
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

//   function reduxThunk(dispatch,getState){
//           // logic 

//           getUserData(dispatch)
//   }

  function thunkActionCreator(){
      return function(dispatch,getState){
            getUserData(dispatch)
      }
  }

//   export default reduxThunk

export default thunkActionCreator

const myReducer = (storedata,action)=>{  
  //action = {type:"INC",data:1}
  //storedata = {count:0,todo:[]}

    // to update store data based on action object data
      if(action.type==="INC") {
         return {
            ...storedata,
            count:storedata.count + action.data
         }
      } else if(action.type==="DEC"){
         return {
            ...storedata,
            count:storedata.count - action.data
         }
      } else if(action.type==="todo"){
        return {
            ...storedata,
            todo:[...storedata.todo,action.data]
        }
      }


  return storedata
}

export default myReducer


const myReducer = (state={todo:[]},action)=>{

  //  Modify or update Store data based on action object
    switch(action.type){
      case "todo":
         return {
            ...state,
            todo:[...state.todo,action.payload]
         }
         break;
         default:
          return state
    }


    
}

export default myReducer
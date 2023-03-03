const jsonReducer = (state={todo:[]},action)=>{
     switch(action.type){

        case "JSON-TODO":{
            return {
                ...state,
                todo:action.payload
            }
        }
        default:{
            return state
        }

     }
}

export default jsonReducer
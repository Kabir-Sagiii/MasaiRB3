

const counterReducer = (state={count:1000},action)=>{  // {count:1000}
       if(action.type==="INCREMENT"){
            
            return {
                 ...state,
                 count:state.count + action.payload
            }
            
       } else if(action.type==="DECREMENT"){
           return {
            ...state,
            count:state.count - action.payload
           }
       } else {

    return state
       }
}

export default counterReducer
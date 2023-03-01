import { TODO ,COUNT} from "./ActionTypes"
export const todoAction = (data)=>{
    return {
         type:TODO,
         payload:data
    }
}

export const countAction = (data)=>{
    return {
        type:COUNT,
        payload:data
    }
}
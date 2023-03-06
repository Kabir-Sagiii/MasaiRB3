import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'

// import logger from 'redux-logger'

import jsonReducer from './jsonReducer'
  
// const myLogger = (store)=>(next)=>(action)=>{
//     //code 
//    //  console.log("Store",store)  // {getState,dispatch}
//    //  console.log("Action",action) //{type:"",payload:""}
//    console.log("----------------------------------------------------")
//    console.log("PrevState",store.getState())
//    console.log("Action",action)
//    console.log("NextState",store.getState())
//    console.log("----------------------------------------------------")
//     next(action)
// }

// const myLogger2 = (store)=>(next)=>(action)=>{
//    //code 
//      console.log("Second Middleware")
//    next(action)
// }


   const myStore  = createStore(jsonReducer,applyMiddleware(thunk))

   export default myStore
import {createStore,applyMiddleware} from 'redux'
import myReducer from './reducer'
import logger from 'redux-logger'


   const myStore  = createStore(myReducer,{count:0,todo:[]},applyMiddleware(logger))

   // myStore.subscribe(()=>{
   //      console.log(myStore.getState())
   // })
   export default myStore
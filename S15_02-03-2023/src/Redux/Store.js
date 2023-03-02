import {createStore,applyMiddleware,combineReducers} from 'redux'
import myReducer from './reducer'
import logger from 'redux-logger'
import counterReducer from './counterReducer'

const combinedReducers =  combineReducers({
                                  todoReducer:myReducer,
                                  cReducer:counterReducer
                              })

   const myStore  = createStore(combinedReducers,applyMiddleware(logger))

   // myStore.subscribe(()=>{
   //      console.log(myStore.getState())
   // })
   export default myStore
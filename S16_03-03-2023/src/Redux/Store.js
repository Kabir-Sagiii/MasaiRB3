import {createStore,applyMiddleware,combineReducers} from 'redux'

import logger from 'redux-logger'

import jsonReducer from './jsonReducer'



   const myStore  = createStore(jsonReducer,applyMiddleware(logger))

   export default myStore
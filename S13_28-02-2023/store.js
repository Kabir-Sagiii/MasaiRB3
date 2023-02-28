import {createStore} from 'redux'
import myReducer from './reducer.js'


const store = createStore(myReducer,{count:0,todo:[]})

export default store
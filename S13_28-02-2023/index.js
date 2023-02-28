import store from "./store.js"
var count = 1
console.log(store.getState()) //  {count:0,todo:[]}

   store.dispatch({
      type:"INC",
      data:count
   })

   console.log(store.getState()) // {count:1,todo:[]}

   store.dispatch({
    type:"INC",
    data:count
 })

 console.log(store.getState()) // {count:2,todo:[]}

 store.dispatch({
    type:"INC",
    data:count
 })

 console.log(store.getState()) // {count:3,todo:[]}

 store.dispatch({
    type:"DEC",
    data:count
 })

 console.log(store.getState())

 store.dispatch({
    type:"todo",
    data:"Kabir"
 })

 console.log(store.getState())  // {} or 100

 store.dispatch({
    type:"todo",
    data:"Sagar"
 })

 console.log(store.getState())
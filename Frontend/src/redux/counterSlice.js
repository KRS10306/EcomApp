import { createSlice } from '@reduxjs/toolkit'


//redux --> JS library used to do state managment  (in react we used useContext) --> Stores data globally

//redux toolkit --> 2 functions reducer & action 

//reducer--> function that return single/unique value
//action --> useDispatch & useSelector
//action --> used to send or retrive data

// slice--> where both reducer and action are used together(performed together)

// Redux Toolkit also includes a powerful data fetching and caching capability



//useContext used in small projects
//Redux Toolkit is used for big project

const initialState = {
//   value: 0,
  cart:[]
}

export const cartItem = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart:(state,action)=>{
        // state.cart.push(action.payload)
        state.cart = [...state.cart, action.payload]
        // console.log(state.cart)

        // const Item ={
        //   id: id,
        //   title: title,
        //   price: price
        // } --> This is action.payload in ProductListing


    }//reducer-->Always returns 1 single value
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartItem.actions

export default cartItem.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totlaQuantity: 0,
  favoriteItem: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      state.totlaQuantity++

      if(!existingItem){
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price
        })
      }else{
        existingItem.quantiy++
        existingItem.totalPrice = Number(existingItem.totalPrice) + Number (newItem.price)
      }
      state.totalAmount = state.cartItems.reduce((total, item) => total+Number(item.price) * Number(item.quantity),0)
    },

    deleteItem:(state, action)=>{
      const id = action.payload
      const existingItem = state.cartItems.find(item=>item.id === id)
      
      if(existingItem){
        state.cartItems = state.cartItems.filter(item=> item.id !== id)
        state.totlaQuantity = state.totlaQuantity - existingItem.quantity
  
        state.totalAmount = state.cartItems.reduce((total, item) => total+Number(item.price) * Number(item.quantity),0)
      }
    },
    addToFavorite: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.favoriteItems.findIndex(
        (item) => item.id === newItem.id
      );
      
      if (existingItemIndex >= 0) {
        // Item exists in favorites and remove it
      state.favoriteItems.splice(existingItemIndex, 1);
      } else {
        // Item does not exist in favorites and add it
        state.favoriteItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          imgBackUrl: newItem.imgBackUrl,
          category: newItem.category,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
      }
    },
  },
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer
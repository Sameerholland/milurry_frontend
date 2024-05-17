import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { FetchOrder } from "./OrderAPI"

const initialState = {
   status : 'idle',
   order:[],
}

export const FetchOrderAsync = createAsyncThunk('Order/fetch', async (userdata)=>{
   const response = await FetchOrder(userdata)
   return response.data;
})

export const OrderSlice = createSlice({
   name:'Order',
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
      builder
      .addCase(FetchOrderAsync.pending,(state)=>{
         state.status = "Pending";
      })
      .addCase(FetchOrderAsync.fulfilled,(state,actions)=>{
         state.status = "idle";
         state.order = actions.payload;
      })

   }
})

export const FetchedOrder = (state)=> state.Order.order;
export default OrderSlice.reducer;
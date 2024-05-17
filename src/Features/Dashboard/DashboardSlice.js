import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { FetchDashboardData } from "./DashboardAPI"

const initialState = {
   status:'idle',
   Order_Amount:0,
   Order_Status:[],
   Daily_Sales:0,
   new_Customer:0,
   pending_Order:0,
   Most_Selling_Category:[],
   Order_Status:{},
   Recent_Orders:[],
   recent_transiction:[],
   sales_Statics:[],
}

export const FetchDashbordDataAsync = createAsyncThunk('Dashboard/fetch', async (userdata)=>{
   const response = await FetchDashboardData(userdata)
   console.log(response.data)
   return response.data;
})

export const DashboardSlice = createSlice({
   name:'Dashboard',
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
      builder
      .addCase(FetchDashbordDataAsync.pending,(state)=>{
         state.status = 'pending';
      })
      .addCase(FetchDashbordDataAsync.fulfilled,(state,actions)=>{
         state.status = 'idle';
         state.Order_Amount = actions.payload.Order_Amount;
         state.Daily_Sales = actions.payload.Daily_Sales;
         state.Order_Status = actions.payload.Order_Status;
         state.new_Customer = actions.payload.new_Customer; //
         state.pending_Order = actions.payload.pending_Order;
         state.Most_Selling_Category = actions.payload.Most_Selling_Category;
         state.Recent_Orders = actions.payload.Recent_Orders; //
         state.recent_transiction = actions.payload.recent_transiction; //
         state.sales_Statics = actions.payload.sales_Statics; //
      })
   }
})
export const Fetchedorder_Amount = (state)=> state.Dashboard.Order_Amount;
export const FetchedDaily_Sales = (state)=> state.Dashboard.Daily_Sales;
export const Fetchednew_Customer = (state)=> state.Dashboard.new_Customer;
export const Fetchedpedning_order =(state)=> state.Dashboard.pending_Order;
export const FetchedMost_selling_Category = (state)=> state.Dashboard.Most_Selling_Category;
export const FetchedRecent_Order = (state)=> state.Dashboard.Recent_Orders;
export const Fetchedrecent_transiction = (state)=>state.Dashboard.recent_transiction;
export const Fetchedsales_statics = (state)=>state.Dashboard.sales_Statics;

export default DashboardSlice.reducer;
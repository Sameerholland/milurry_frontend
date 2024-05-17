import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { CreateSupplier, LoginSupplier } from "./AuthAPI";

const initialState = {
   status : "idle",
   auth:[],
   error:null,
}

export const  CreateSupplierASync =  createAsyncThunk('Auth/CreateSupplier', async (userdata)=>{
   const response = await CreateSupplier(userdata)
   return response.data;
})

export const LoginSupplierAsync = createAsyncThunk('Auth/Login', async (userdata)=>{
   const response = await LoginSupplier(userdata);
   return response.data;

})


export const AuthSlice = createSlice({
   name:"Auth",
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
      builder
      .addCase(CreateSupplierASync.pending,(state)=>{
         state.status = "pending";
      })
      .addCase(CreateSupplierASync.fulfilled,(state,actions)=>{
         state.status = "idle";
         state.auth = actions.payload;
      })
      .addCase(CreateSupplierASync.rejected,(state,actions)=>{
         console.log(actions.payload)
         state.status = 'idle';
         state.error = "User Alredy Exist With This Number";
      })
      .addCase(LoginSupplierAsync.pending,(state)=>{
         state.status = 'pending';
      })
      .addCase(LoginSupplierAsync.fulfilled,(state,actions)=>{
         state.status = 'idle';
         state.auth = actions.payload;
      })
   }
})

export const LoggedSupplier = (state)=>state.Auth.auth;
export const LoggedError = (state) => state.Auth.error;

export default AuthSlice.reducer;
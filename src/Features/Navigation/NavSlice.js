import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
   active: 'Dashboard',
}

export const ChangeNavigation = createAsyncThunk('Nav/change', async  (userdata)=>{
   return userdata;
})

export const NavSlice = createSlice({
   name:'Nav',
   initialState,
   reducers:{},
   extraReducers: (builder)=>{
      builder
      .addCase(ChangeNavigation.fulfilled,(state,actions)=>{
         state.active = actions.payload;
      })
   }
})

export const Active_nav = (state)=>state.Nav.active;

export default NavSlice.reducer;
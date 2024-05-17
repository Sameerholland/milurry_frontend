import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AddCategory, FetchUser, UpdateProfilePic } from "./SettingAPI"

const initialState = {
   status:'idle',
   Categories:[],
   Sizes: [],
   Genders:[],
   user:[],
}
export const FetchUserAsync = createAsyncThunk('User/fetch', async (userdata)=>{
   const response = await FetchUser(userdata);
   return response.data;
})

export const AddCategoryAsync = createAsyncThunk('User/category/add', async (data)=>{
   const response = await AddCategory(data);
   return response.data;
})

export const updateprofilepicAsync = createAsyncThunk('User/UpdateProfilepic', async (userdata)=>{
   const response = await UpdateProfilePic(userdata);
   return response.data;
})

export const UserSlice = createSlice({
   name:'User',
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
      builder
      .addCase(AddCategoryAsync.pending,(state)=>{
         state.status = 'pending';
      })
      .addCase(AddCategoryAsync.fulfilled,(state,actions)=>{
         state.status = 'idle';
         state.Categories = actions.payload.Category;
         state.user = actions.payload;
      })
      .addCase(FetchUserAsync.pending,(state)=>{
         state.status = 'pending';
      })
      .addCase(FetchUserAsync.fulfilled,(state,actions)=>{
         state.status = 'idle';
         state.Categories = actions.payload.Category;
         state.Sizes = actions.payload.Size;
         state.Genders = actions.payload.Gender;
         state.user = actions.payload;
      })
      .addCase(updateprofilepicAsync.pending,(state)=>{
         state.status = "pending";
      })
      .addCase(updateprofilepicAsync.fulfilled,(state,actions)=>{
         state.status = "idle";
         state.user =actions.payload;
      })

   }
})

export const LoggedUser = (state)=> state.User.user;
export const LoggedCategories = (state) => state.User.Categories;
export const LoggedSize = (state)=> state.user.Sizes;
export const LoggedGender = (state)=> state.user.Genders;

export default UserSlice.reducer;
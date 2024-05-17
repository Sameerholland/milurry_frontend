import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddProduct, FetchProduct } from "../ProductAPI";

const initialState = {
  Form: false,
  edit: false,
  Form_img: [],
  Form_size: [],
  Form_category: [],
  product:[],
  totalProduct:0,
  Selectedproduct : [],
  status :'idle'
};

export const ChangeForm = createAsyncThunk(
  "Product/change",
  async (userdata) => {
    console.log(userdata)
    return userdata;
  }
);
export const Push_Form_Img = createAsyncThunk(
  "Product/Pushimg",
  async (userdata) => {
    return userdata;
  }
);
export const Add_From_Size = createAsyncThunk(
  "Product/Form_Size",
  async (userdata) => {
    return userdata;
  }
);

export const remove_Form_Size = createAsyncThunk("Product/removesize", async (userdata)=>{
  return userdata;
})
export const remove_Form_catego = createAsyncThunk("Product/removecatego", async (userdata)=>{
  return userdata;
})
export const remove_Form_img = createAsyncThunk("Product/removeimg", async (userdata)=>{
  return userdata;
})

export const SelectProdcutAsync = createAsyncThunk("Product/select", async (userdata)=>{
  return userdata;
})
export const Add_Form_catego = createAsyncThunk(
  "Product/Add_Catego",
  async (userdata) => {
    return userdata;
  }
);
export const AddProductAsync = createAsyncThunk(
  "Product/add",
  async (userdata) => {
    const response = await AddProduct(userdata);
    return response.data;
  }
);

export const FetchProductAsync = createAsyncThunk( "Product/fetch", async (query)=>{
  console.log()
  const response = await FetchProduct(query);
  return response.data;
})

export const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ChangeForm.fulfilled, (state, actions) => {
        state.Form = actions.payload.Form;
        state.edit = actions.payload.edit;
        state.Selectedproduct = actions.payload.data;
      })
      .addCase(Push_Form_Img.fulfilled, (state, actions) => {
        state.Form_img.push(actions.payload);
      })
      .addCase(Add_From_Size.fulfilled, (state, actions) => {
        state.Form_size.push(actions.payload);
      })
      .addCase(Add_Form_catego.fulfilled, (state, actions) => {
        state.Form_category.push(actions.payload);
      })
      .addCase(SelectProdcutAsync.fulfilled,(state, actions)=>{
        state.Selectedproduct = actions.payload;
      })
      .addCase(AddProductAsync.pending,(state)=>{
        state.status = 'pending';
      })
      .addCase(AddProductAsync.fulfilled,(state,actions)=>{
         state.product.push(actions.payload);
      })
      .addCase(remove_Form_Size.fulfilled,(state)=>{
        state.Form_size = []
      })
      .addCase(remove_Form_catego.fulfilled,(state)=>{
        state.Form_category = []
      })
      .addCase(remove_Form_img.fulfilled,(state)=>{
        state.Form_img = []
      })
      .addCase(FetchProductAsync.pending,(state)=>{
        state.status ='Pending';
      })
      .addCase(FetchProductAsync.fulfilled,(state,actions)=>{
        state.status = 'idle';
        state.totalProduct = actions.payload.totaldoc;
        state.product = actions.payload.Product;
      });
  },
});

export const Selete_From = (state) => state.Product;
export const Form_img = (state) => state.Product.Form_img;
export const Form_Size = (state) => state.Product.Form_size;
export const Form_catego = (state) => state.Product.Form_category;
export const Products = (state)=>state.Product.product;
export const SelectedProduct = (state)=> state.Product.Selectedproduct;
export const TotalProduct = (state)=> state.Product.totalProduct;
export default ProductSlice.reducer;

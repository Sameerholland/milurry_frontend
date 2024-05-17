import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Features/Authentication/AuthSlice";
import NavSlice from "./Features/Navigation/NavSlice";
import ProductSlice from "./Features/Products/componets/ProductSlice";
import  UserSlice  from "./Features/Setting/SettingSlice";
import OrderSlice from "./Features/Orders/OrderSlice";
import DashboardSlice from "./Features/Dashboard/DashboardSlice";




export const Store = configureStore({
   reducer:{
      Auth:AuthSlice,
      Nav:NavSlice,
      Product:ProductSlice,
      User:UserSlice,
      Order:OrderSlice,
      Dashboard:DashboardSlice,
      
   }
})
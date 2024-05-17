import { Add, Cancel, Check} from "@mui/icons-material";
import React, { useState } from "react";
import thumbnail from "../../../Visules/Img/product-7.png";
import "../../../Style/main.css";
import "../../../Style/Product.css";
import { useSelector } from "react-redux";
import { SelectedProduct } from "./ProductSlice";

export default function EditProduct() {
  window.scrollTo(0,0)
  const Selectedproduct = useSelector(SelectedProduct)
   const img = Selectedproduct.Images;
   
  //  document.getElementById('genderbtn').checked = true;
  const size = [];
  const [gender, setGender] = useState(Selectedproduct.Gender);
  const avaliable_size = ["XS", "S", "M", "L", "XL"];
  const avaliable_gender = ["Men", "Women", "kid", "Unisex"];
  const category = ["shirt", "jeans", "lower", "t-shirt"];
  return (
   <div className="px-10">
   <div className="flex  justify-between items-center  pt-5 ">
     <div>
       <p className="flex justify-center items-center text-4xl linden-hill-regular text-olive-green">
         Overview
       </p>
       <p className="text-base kurale-regular text-olive-green-70 ">
         Edit Product Details
       </p>
     </div>
     <div className="flex gap-3 justify-center ">
       <div className="px-5 gap-1 py-2 flex justify-center items-center kurale-regular  text-black border-2 border-black rounded-full ">
         <Cancel/>
         <button>Cancel Changes</button>
       </div>
       <div className="px-5 py-2 flex justify-center items-center kurale-regular shadow-drop-2-bl  text-black bg-light-green rounded-full ">
         <Check className="" />
         <button>Save Changes</button>
       </div>
     </div>
   </div>
   <div className="grid grid-cols-3 gap-3 mt-5">
     <div className=" col-span-2 bg-white-10 p-7 rounded-md">
       <p className="belleza-regular text-xl">General Information</p>

       <div className="flex flex-col pt-2">
         <label className="kurale-regular text-olive-green-70 py-2 ">
           Product Name
         </label>
         <input
           type="text"
           value={Selectedproduct.Title}
           className=" bg-dark-white px-2 py-1 placeholder:text-black"
         />
       </div>
       <div className="flex flex-col">
         <label className="kurale-regular text-olive-green-70 py-2 ">
           Product Discription
         </label>
         <textarea
           className=" bg-dark-white px-2 py-1 placeholder:text-black h-[150px]"
           value={Selectedproduct.Discription}
         />
       </div>
       <div className="grid grid-cols-2 pt-5">
         <div>
           <p className="belleza-regular text-xl">Size</p>
           <p className="kurale-regular text-olive-green-70 ">
             Pick available size
           </p>
           <div className="flex gap-4 pt-4 ">
             {avaliable_size.map((item) => {
               return (
                 <div
                   className={`flex justify-center rounded-md   items-center w-12 h-12 bg-white-11 `}
                 >
                   <p>{item}</p>
                 </div>
               );
             })}
           </div>
         </div>
         <div>
           <p className="belleza-regular text-xl">Gender</p>
           <p className="kurale-regular text-olive-green-70 ">
             Pick available Gender
           </p>
           <div>
             <div className="flex gap-4 pt-8  ">
               {avaliable_gender.map((item) => {
                 return (
                   <label class="container flex items-center ">
                     <input type="radio" name="radio" id="genderbtn"  />
                     <span class="check"></span>
                     <p className="pl-1 pb-2 text-lg linden-hill-regular">
                       {item}
                     </p>
                   </label>
                 );
               })}
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className="bg-white-10 p-5">
       <p className="belleza-regular text-xl">Upload Img</p>

       <div className="flex justify-center items-center py-5 ">
         <div className="py-8  px-8 bg-dark-white">
           <img src={img[Selectedproduct.Thumbnail]} className="w-[250px] h-[280px]  " />
         </div>
       </div>
       <div className="flex gap-3">
         {img.map((item) => {
           return (
             <div>
               <img
                 src={item}
                 className="w-12 h-12 border-black border-[2px] rounded-lg cursor-pointer"
               />
             </div>
           );
         })}

         <div className="w-12 h-12 border-dashed border-[3px] rounded-lg border-border-white flex justify-center items-center ">
           <div className="w-6 h-6 bg-sky flex justify-center items-center rounded-full">
             <Add className=" cursor-pointer" />
           </div>
         </div>
       </div>
       <div />
     </div>
   </div>
   <div className="grid grid-cols-3 gap-5 my-10">
     <div className=" col-span-2 bg-white-10 p-7 rounded-md">
       <p className="belleza-regular text-xl">Pricing and Stock</p>
       <div className="grid grid-cols-2 gap-4">
         <div className="flex flex-col pt-2">
           <label className="kurale-regular flex flex-col  text-olive-green-70 py-2 ">
             Base Pricing
             <input
               type="text"
               value={`₹${Selectedproduct.Price}`}
               className=" bg-dark-white px-2 mt-2 py-1 font-medium text-black placeholder:text-black"
             />
           </label>

           <div className="flex flex-col pt-2">
             <label className="kurale-regular flex flex-col  text-olive-green-70 py-2 ">
               Discount
               <input
                 type="text"
                 value={`${Selectedproduct.DiscountPercent}%`}
                 className=" bg-dark-white px-2 mt-2 py-1 text-black"
               />
             </label>
           </div>
         </div>
         <div className="flex flex-col pt-2">
           <label className="kurale-regular flex flex-col  text-olive-green-70 py-2 ">
             Stock
             <input
               type="text"
               value={Selectedproduct.Stock}
               className=" bg-dark-white px-2 mt-2 py-1 text-black"
             />
           </label>
           <label className="kurale-regular flex flex-col  text-olive-green-70 py-2 ">
             Brand Name
             <input
               type="text"
               value={Selectedproduct.Brand}
               className=" bg-dark-white px-2 mt-2 py-1 text-black"
             />
           </label>
         </div>
       </div>
     </div>
     <div>
       <div className=" col-span-2 bg-white-10 p-7 rounded-md ">
         <p className="belleza-regular text-xl">Category</p>
         <div className="mt-4 disable-scroll1">
           {category.map((item) => {
             return (
               <div className=" bg-dark-white flex gap-3 mt-3 px-4 py-2">
                 <input
                   type="checkbox"
                   id={item}
                   name={item}
                   value={item}
                 />
                 <label for={item} className="kurale-regular text-base"> {item}</label>
               </div>
             );
           })}
          
         </div>
         <button className="px-5 py-2 mt-4 flex justify-center text-sm items-center kurale-regular shadow-drop-2-bl  text-black bg-light-green rounded-full">Add Category</button>
       </div>
     </div>
   </div>
 </div>
  )
}

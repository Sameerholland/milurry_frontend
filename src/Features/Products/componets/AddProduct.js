import { Add, Check, Drafts } from "@mui/icons-material";
import React, { useState, useRef } from "react";
import "../../../Style/main.css";
import "../../../Style/Product.css";
import imginput from '../../../Visules/Img/imginpu1.png'
import { useDispatch, useSelector } from "react-redux";
import { AddProductAsync, Add_Form_catego, Add_From_Size, ChangeForm, Form_Size, Form_catego, Form_img, Push_Form_Img, remove_Form_Size, remove_Form_catego, remove_Form_img } from "./ProductSlice";
import toast, { Toaster } from "react-hot-toast";
import { LoggedSupplier } from "../../Authentication/AuthSlice";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { imagedb } from "../../../Context/AuthContext/Firebase";
import { v4 } from "uuid";


export default function AddProduct() {
  window.scrollTo(0,0)

  const inputref = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector(LoggedSupplier)
  const img = useSelector(Form_img);
  const size = useSelector(Form_Size);
  const catego = useSelector(Form_catego)
  const [Imge,setImge] = useState("");
  const [gender, setGender] = useState();
  const [imgage,setImage] = useState(-1);
  const [state,setState] = useState({
    Title:"",
    Discription:"",
    Price:"",
    DiscountPercent:"",
    Stock:"",
    Brand:""

  })


  const avaliable_size = ["XS", "S", "M", "L", "XL"];
  const avaliable_gender = ["Men", "Women", "kid", "Unisex"];
  const category = ["Gaown", "Saree", "Fork", "Lahenga"];


  const handleInputChange = (event) =>{
    const {name,value} = event.target;
    console.log(event.target.value)
    setState((preProps)=>({
      ...preProps,
      [name]:value
    }))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(state.Title == ''){
      toast.error("Please Fill Title");
      return;
    }
    if(state.Discription == ''){
      toast.error('Please Fill Discription')
      return ;
    }
    if(state.Price == ''){
      toast.error('Please Enter The Prie of Product');
      return ;
    }
    if(state.Stock == ''){
      toast.error('Please Enter Stock Of the Product')
    }
    if(img.length == 0){
      toast.error("Please Upload at least 4 images of Product.")
    }
    dispatch(AddProductAsync({
      Title:state.Title,
      Discription:state.Discription,
      Price:state.Price,
      DiscountPercent:state.DiscountPercent,
      Stock:state.Stock,
      Brand:state.Brand,
      Category:catego,
      Size:size,
      Gender:gender,
      Supplier_id:user.id,
      Thumbnail:imgage,
      Images:img
    }))

    dispatch(remove_Form_Size());
    dispatch(remove_Form_catego());
    dispatch(remove_Form_img());


    toast.success("Product is Added")
    setTimeout(()=>{
      dispatch(ChangeForm({Form:false}))

    },1000)
    

  }

  const handleDarft = (e)=>{
    e.preventDefault();
    if(state.Title == ''){
      toast.error("Please Fill Title");
      return;
    }
    if(state.Discription == ''){
      toast.error('Please Fill Discription')
      return ;
    }
    if(state.Price == ''){
      toast.error('Please Enter The Prie of Product');
      return ;
    }
    if(state.Stock == ''){
      toast.error('Please Enter Stock Of the Product')
    }
    if(img.length == 0){
      toast.error("Please Upload at least 4 images of Product.")
    }
    dispatch(AddProductAsync({
      Title:state.Title,
      Discription:state.Discription,
      Price:state.Price,
      DiscountPercent:state.DiscountPercent,
      Stock:state.Stock,
      Brand:state.Brand,
      Category:catego,
      Size:size,
      Gender:gender,
      Supplier_id:user.id,
      Thumbnail:imgage,
      Images:img,
      Status:'Draft'
    }))

    dispatch(remove_Form_Size());
    dispatch(remove_Form_catego());
    dispatch(remove_Form_img());

    toast.success("Product is Added")
    setTimeout(()=>{
      dispatch(ChangeForm({Form:false}))

    },1000)
    

  }
  const AddSize = (item) =>{ 
    dispatch(Add_From_Size(item))
  }

  const handleInputClick = ()=>{
    inputref.current.click();
  }
  const Add_Category = (item)=>{
    dispatch(Add_Form_catego(item))
  }

  const convertTobase64 = (e) =>{
    console.log(e)
    const imgref = ref(imagedb,`files/${v4()}`)
    uploadBytes(imgref,e.target.files[0]).then((snapshot)=>{
      getDownloadURL(snapshot.ref).then((url)=>{
        setImage(imgage+1)
     dispatch(Push_Form_Img(url))
      })
    })
  }

  
  return (
    <div className="px-10">
      <Toaster position="top-center"
  reverseOrder={false}/>
      <div className="flex  justify-between items-center  pt-5 ">
        <div>
          <p className="flex justify-center items-center text-4xl linden-hill-regular text-olive-green">
            Overview
          </p>
          <p className="text-base kurale-regular text-olive-green-70 ">
            Adding New Product
          </p>
        </div>
        <div className="flex gap-3 justify-center ">
          <div onClick={handleDarft} className="px-5 gap-1 py-2 flex justify-center items-center kurale-regular  text-black border-2 border-black rounded-full ">
            <Drafts />
            <button>Save Draft</button>
          </div>
          <div className="px-5 py-2 flex justify-center items-center kurale-regular shadow-drop-2-bl  text-black bg-light-green rounded-full " onClick={handleSubmit}>
            <Check className="" />
            <button >Add Product</button>
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
              name="Title"
              value={state.Title}
              onChange={handleInputChange}
              placeholder="Please Enter Product Title here... "
              className=" bg-dark-white px-2 py-1 placeholder:text-slity"
            />
          </div>
          <div className="flex flex-col">
            <label className="kurale-regular text-olive-green-70 py-2 ">
              Product Discription
            </label>
            <textarea
            value={state.Discription}
            name="Discription"
            onChange={handleInputChange}
              className=" bg-dark-white px-2 py-1 placeholder:text-slity h-[150px]"
              placeholder="Please Enter Product Discription here..."
            />
          </div>
          <div className="grid grid-cols-2 pt-5">
            <div>
              <p className="belleza-regular text-xl">Size</p>
              <p className="kurale-regular text-olive-green-70 ">
                Pick available size
              </p>
              <div className="flex gap-4 pt-4 ">
                {avaliable_size.map((item,index) => {
                  return (
                    <div onClick={()=>AddSize(item)}
                    id="size"
                  
                      className={`flex justify-center rounded-md cursor-pointer    items-center w-12 h-12 bg-light-blue`}
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
                        <input type="radio" name="radio" onClick={()=>setGender(item)}/>  
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
              {
                !img ? <p className="w-[250px] h-[280px] flex justify-center items-center font-bold"> No Image</p>:
              
              <img src={img[imgage]} className="w-[250px] h-[280px]  " />}
            </div>
          </div>
          <div className="flex gap-3">
            
           {!img ? '': img.map((item,index) => {
            console.log(imgage)
              console.log(item,'item')
              return (
                <div>
                  <img
                   onClick={()=>setImage(index)}
                    src={item}
                    className={`w-12 h-12 ${img[imgage] == item ? 'border-black border-[2px]':''}  rounded-lg cursor-pointer`}
                  />
                </div>
              );
            })}

            <div className="w-12 h-12 border-dashed border-[3px] rounded-lg border-border-white flex justify-center items-center " onClick={handleInputClick}>
              
              <img src={imginput}/>
              <input type="file" accept="image/*"  ref={inputref} onChange={convertTobase64} className=" hidden"/>
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
                  type="number"
                  name="Price"
                  value={state.Price}
                  onChange={handleInputChange}
                  placeholder="$XXX "
                  className=" bg-dark-white px-2 mt-2 py-1 placeholder:text-slity text-black"
                />
              </label>

              <div className="flex flex-col pt-2">
                <label className="kurale-regular flex flex-col  text-olive-green-70 py-2 ">
                  Discount
                  <input
                    type="number"
                    max='99'
                    name="DiscountPercent"
                    value={state.DiscountPercent}
                    onChange={handleInputChange}
                    placeholder="XX% "
                    className=" bg-dark-white px-2 mt-2 py-1 placeholder:text-slity text-black"
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col pt-2">
              <label className="kurale-regular flex flex-col  text-olive-green-70 py-2 ">
                Stock
                <input
                  type="number"
                  name="Stock"
                  value={state.Stock}
                  onChange={handleInputChange}
                  placeholder="XXX "
                  className=" bg-dark-white px-2 mt-2 py-1 placeholder:text-slity text-black"
                />
              </label>
              <label className="kurale-regular flex flex-col  text-olive-green-70 py-2 ">
                Brand Name
                <input
                  type="text"
                  name="Brand"
                  value={state.Brand}
                  onChange={handleInputChange}
                  placeholder="Brand "
                  className=" bg-dark-white text-black px-2 mt-2 py-1 placeholder:text-slity"
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
                      onClick={()=>Add_Category(item)}
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
  );
}

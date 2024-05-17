import React, { useState } from 'react'
import profilephoto from '../../../Visules/Img/sumu.jpeg'
import '../../../Style/main.css'
import {   Money, ShoppingBag,} from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { AddCategoryAsync, AddnewCategoryAsync, LoggedCategories, LoggedUser, updateprofilepicAsync } from '../SettingSlice'
import { LoggedSupplier } from '../../Authentication/AuthSlice'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { imagedb } from '../../../Context/AuthContext/Firebase'
import { v4 } from 'uuid'

export default function Setting() {
   const [ category,setCategory] = useState("");
   const Auth = useSelector(LoggedSupplier)
   const user = useSelector(LoggedUser);
   const categories = useSelector(LoggedCategories);
   
   const dispatch = useDispatch();

  

   const handleSubmit = async ()=>{
      dispatch(AddCategoryAsync({id:Auth.id,Category:category}))
   }

   const HandleUpdateProfilePic = async (e)=>{
      console.log(e);
      const imgref = ref(imagedb,`files/${v4x()}`)

      uploadBytes(imgref,e.target.files[0]).then((snapshot)=>{
         getDownloadURL(snapshot.ref).then((url)=>{
            dispatch(updateprofilepicAsync({id:user._id,Profile_pic:url}))
         })
      })

   }
   

   
  return (
   <div className='grid grid-cols-3 p-5 w-full gap-10'>
   <div className=' bg-white-11 px-2 flex flex-col justify-center items-center h-full'>
      <div className='flex'>
      <img src={profilephoto} className=' relative rounded-full my-12  border-green border-4 w-60'/>
      
      </div>
      
      <div className='w-full pt-5 flex flex-col justify-center items-center '>
     
      
         <p className='kurale-regular text-2xl'> Add new Category</p>
         <div className=' flex w-full mt-5 justify-around items-center'>
            <input type='text' onChange={(e)=> setCategory(e.target.value)} className=' rounded-sm bg-dark-white-100 px-2 mt-2 py-1 placeholder:text-slity text-black' placeholder='Enter New Category'/>
            <button className=' bg-light-blue px-5 mt-2 text-white rounded-md py-1 ' onClick={handleSubmit}>Add</button>
         </div>
         <div className='mt-6'>
         <p className='kurale-regular text-xl text-olive-green'> Categories</p>

         <div className='-ml-20 mb-10'>
            {
               categories.map((item,index)=>{
                  return (
                     <div className='flex gap-2 pt-2 '>
                        <p className=' text-black font-bold'>{index +1}.</p>
                     <p>{item}</p>
                     </div>
                  )
               })
            }
         </div>
         </div>

      </div>
      
   </div>
   <div className=' col-span-2 bg-white-11'>

     <div className=' grid grid-cols-2 px-10 gap-4 py-10'>
       <div className=' bg-light-blue p-8 '>
         <div className='flex gap-3'>
         <div className=' bg-Orange w-10 h-10 flex justify-center items-center  rounded-full'>
         <ShoppingBag style={{fill:'#ffffff'}}/>
         
         </div>
         <p className=' text-4xl font-bold text-white'>50</p>
         </div>
         <p className=' linden-hill-regular text-2xl pt-4 text-[#344B47]'>Orders Recieved in last 28 Days</p>

       </div>
       <div className=' bg-light-blue p-8 '>
         <div className='flex gap-3'>
         <div className=' bg-green w-10 h-10 flex justify-center items-center  rounded-full'>

           <Money style={{fill:'#ffffff'}}/>

           
         
         
         </div>
         <p className=' text-4xl font-bold text-white'>$50</p>
         </div>
         <p className=' linden-hill-regular text-2xl pt-4 text-[#344B47]'>Transactions done in  last 28 Days</p>

       </div>

     </div>

   </div>
 </div>
  )
}

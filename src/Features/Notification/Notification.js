import React from 'react'
import { ChevronDownIcon, PencilIcon } from '@heroicons/react/20/solid'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useDispatch } from 'react-redux'
import { Delete } from '@mui/icons-material'
import product from '../../Visules/Img/product-1.jpg'
import Moment from 'react-moment'

export default function Notification() {
  const dispatch = useDispatch()
  const Notification = [
    {
      thumbnail: product,
      message:'A Iphone 15 Pro Is Cancled by sumu due to Delay Delivery',
      type:'Failed',
      time:'5/05/2024'
    },
    {
      thumbnail: product,
      message:'A Iphone 15 Pro Is Cancled by sumu due to Delay Delivery',
      type:'Sucess',
      time:'9/01/2024'
    },
    {
      thumbnail: product,
      message:'A Iphone 15 Pro Is Cancled by sumu due to Delay Delivery',
      type:'warnig',
      time:'9/01/2024'
    }
  ]
  return (
   <div className='px-10'>
   <div className="flex  justify-between items-center  pt-5 ">
     <div>
       <p className="flex justify-center items-center text-5xl linden-hill-regular text-olive-green">
       Notification
       </p>
       <p className="text-base kurale-regular text-olive-green-70 ">
         Check Your Updates
       </p>
     </div>
     
   </div>
   <div className=' w-full   bg-white border-[1px] flex justify-between items-center px-4 py-3 abhaya-libre-regular border-border-white rounded-md mt-2'>
      <div className=' '>
      <input type='search' placeholder='Search...' className='outline-none border-border-white border-[2px] px-2 py-1 w-96'/>
      </div>
      

      

   </div>
   <div className='bg-white'>

   <div className='   gap-4 px-10 py-4 '>
      {Notification.map((item)=>{
         return (


            <div className={` justify-between items-center border-border-white py-2  border-[1px] flex    pr-4 pl-[10px] mb-4 ${item.type == 'Failed'?' bg-light-red':' bg-yellow'} ${item.type =='Sucess'?" bg-light-green-10":""}  `}>
              <div className='flex  justify-start items-center '>
               <img src={item.thumbnail } className='w-[30px] rounded-md justify-center items-center  '/>
               <p className='pl-12'>{item.message}</p>
               </div>
               <Moment fromNow>{item.time}</Moment>
               
               
               
               </div>

         )
      })}


   </div>
   </div>

   <div className="flex items-center justify-between border-t border-border-white bg-white px-4 py-3 sm:px-6">
   <div className="flex flex-1 justify-between sm:hidden">
    
   </div>
   
 </div>
 </div>
  )
}

import React from 'react'
import profilephoto from '../../Visules/Img/sumu.jpeg'
import '../../Style/main.css'
import { AccountCircle, CheckCircle,  Money, ShoppingBag,} from '@mui/icons-material'

export default function Profile() {
  const verification = ["Phone Verification","Email Verification","Address Verification","Seller Verification","Pan Verification","GST Verification"]
  return (
    <div className='grid grid-cols-3 p-5 gap-10'>
      <div className=' bg-white-11 px-2 flex flex-col justify-center items-center h-full'>
         <div>
          <AccountCircle color='white' style={{width:"300px", height:'300px'}} />
         <img src={profilephoto} className=' rounded-full my-12  border-green border-4 w-60'/>
         </div>
         <div className='flex w-full justify-around items-center px-10'>
            <div className=' bg-green w-60 h-2 rounded-full'></div>
            <p className=' text-black kurale-regular'>7/7</p>
         </div>
         <div className='w-full pt-5 '>
          {verification.map((item)=>{
            return (
              <div className='flex justify-between px-10 py-3   w-full items-center'>
                <p className='kurale-regular text-lg '>{item}</p>
                
                <CheckCircle  style={{fill:'#00C308'}}/>
                
              </div>
            )
          })}
         </div>

         <div>

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

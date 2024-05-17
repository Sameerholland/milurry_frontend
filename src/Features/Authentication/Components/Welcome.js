import React from 'react'
import '../../../Style/Welcome.css'
import logo from '../../../Visules/Img/logo.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LoggedError, LoggedSupplier } from '../AuthSlice'
import toast, { Toaster } from 'react-hot-toast'
import { FetchProductAsync } from '../../Products/componets/ProductSlice'
import { FetchUserAsync } from '../../Setting/SettingSlice'
import { FetchOrderAsync } from '../../Orders/OrderSlice'
import { FetchDashbordDataAsync } from '../../Dashboard/DashboardSlice'

export default function Welcome() {
  
  const dispatch = useDispatch();
  const Error = useSelector(LoggedError);
  const user = useSelector(LoggedSupplier)
  const navigate = useNavigate();

  

  if(!user.id){
    toast.error("Something Went Wrong Please Try Again.")
    setTimeout(()=>{navigate('/login')},5000)
    return ;
  }
  else{
    dispatch(FetchDashbordDataAsync(user.id))
    dispatch(FetchProductAsync(user.id));
    dispatch(FetchUserAsync({id:user.id}))
    dispatch(FetchOrderAsync(user.id))
    
    setTimeout(()=>{navigate('/')},5000)
  }
  // if(Error != null){
  //   toast.error(Error)
  //   setTimeout(()=>navigate('/login'),5000)
  //   return ;
    
  // }
  // else{
  //   setTimeout(()=>navigate('/'),5000)
  // }
  
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-light-blue-100'>
      <div><Toaster position="top-center" reverseOrder={false}/></div>
      <img src={logo} alt='LOGO' className=' shadow-drop-bottom w-40 h-40 rounded-full mb-12'/>
      <h1 className="cssanimation typing text-5xl abeezee-regular">Welcome To Milurry Dashboard</h1>
    </div>
  )
}

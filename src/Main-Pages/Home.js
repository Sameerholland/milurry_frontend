import React from 'react'
import TopNavBar from '../Features/Navigation/TopNavBar'
import SideNavBar from '../Features/Navigation/SideNavBar'
import '../Style/Home.css'

import Dashboard from '../Features/Dashboard/Dashboard'
import Product from '../Features/Products/componets/Product'
import Orders from '../Features/Orders/Components/Orders'
import Transactions from '../Features/Transactions/Components/Transactions'
import { useSelector } from 'react-redux'
import { Active_nav } from '../Features/Navigation/NavSlice'
import Profile from '../Features/Profile/Profile'
import Setting from '../Features/Setting/Components/Setting'
import Notification from '../Features/Notification/Notification'


export default function Home() {
  const nav = useSelector(Active_nav)
 
  return (
    <div  className='Home'>
      <div className='fixed w-full h-[100px]'>
      <TopNavBar/>
      </div>
      <div className='grid grid-cols-5 pt-[100px]'>
        <div className='col-span-1'>
        <div className='fixed  px-10'>
         
      <SideNavBar className=''/>
      </div>
      </div>
      <div className='shadow-drop-left bg-light-blue-100 disable-scroll col-span-4 pt-[10px]'>
        {
          nav == 'Dashboard'?<Dashboard/>:
          nav == 'Products'?<Product/>:
          nav == 'Orders'?<Orders/>:
          nav == 'Transactions'?<Transactions/>:
          nav == 'Profile'?<Profile/>:
          nav == 'Setting'?<Setting/>:
          nav == 'Notification'?<Notification/>:
          
          <Dashboard/>
        }
      
      
      </div>

      </div>
      
    </div>
  )
}

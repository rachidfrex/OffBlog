import React from 'react'
import { Link } from 'react-router-dom'
import { BookText } from 'lucide-react';
import { BellRing } from 'lucide-react';
import { SquarePen } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Lock } from 'lucide-react';
import Editeprofile from '../components/editeprofile';
import {Routes, Route ,Outlet} from "react-router-dom";


function Dashboard() {
  return (
    <>
    <div 
    className=' grid grid-cols-12   gap-5 justify-start my-10 mx-20 bg-white rounded-lg p-5'
    >
        <div
        className='col-span-2  border-r border-gray-200 pr-5'
        >
            <h1
            className='text-lg   leading-tight border-b  pb-3'
            >
                Dashboard
            </h1>
            <div className='mt-7 flex flex-col  '>
               
                <Link to='/Blogs' className='text-sm text-gray-500  p-2 py-4 hover:bg-gray-100 flex gap-2 items-center rounded-sm transition duration-200 ease-in '>
                  <BookText size={15} />
                    Blogs
                </Link>
                <Link to='/Notifications' className='text-sm text-gray-500  p-2 py-4 hover:bg-gray-100 flex gap-2 items-center rounded-sm transition duration-200 ease-in'>
                <BellRing size={15} />
                    Notifications
                </Link>
                <Link to='/Write' className='text-sm text-gray-500  p-2 py-4 hover:bg-gray-100 flex gap-2 items-center rounded-sm transition duration-200 ease-in'>
                <SquarePen size={15} />
                    Write
                </Link>
                
            </div>
            <div>
            <h1
            className='text-lg   leading-tight border-b  pb-3 mt-10'
            >
                settings
            </h1>
            <div className='mt-7 flex flex-col  '>
               
               <Link to='/dashboard/edit-profile' className='text-sm text-gray-500  p-2 py-4 hover:bg-gray-100 flex gap-2 items-center rounded-sm transition duration-200 ease-in '>
                 <UserRound size={15} />
                   edite profile
                  
               </Link>
               <Link to='/dashboard/change-password' className='text-sm text-gray-500  p-2 py-4 hover:bg-gray-100 flex gap-2 items-center rounded-sm transition duration-200 ease-in'>
               <Lock size={15} />
                  change password
               </Link>
               
               
           </div>

            </div>
            
        </div>
        <div
        className='col-span-10'
        
        >
      <Outlet/>
        </div>
    </div>
    
    </>
  )
}

export default Dashboard
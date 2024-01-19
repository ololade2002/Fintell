<<<<<<< HEAD

import React from 'react'
import { customerSection } from '../../../../utils/utilsData'

const CustomerSection = () => {
  return (
    <div className='flex flex-col xl:flex-row justify-between gap-4 pt-10 lg:pt-0'>
       {customerSection.map((customer,index) => (
        <div className="customerSection-preview flex flex-col w-[100%] gap-4 px-4 py-4 rounded-lg bg-white  shadow-lg  hover:shadow-none " key={index}>
           <div className='flex justify-between '>
             <div className='flex'>
                <p className='h-14 w-[3px] bg-[#36726c] mr-3'></p> 
                <div> 
                   <p className='t text-zinc-500 font-raleway text-[16px] font-[500]'>{customer.title}</p>
                   <h1 className='font-dmSans text-[26px] font-[600]'>{customer.number}</h1>
                </div>
             </div>

             <div className='bg-[#e4f8e4] rounded-md w-9 h-9 flex items-center justify-center'>
                <customer.icon1 className='w-6 h-7'/>
             </div>
           </div>

           <div className='flex items-center'>
                <customer.icon2 className='text-green-600  w-7'/>
                <p className='text-green-600 font-[500] text-[17px] font-dmSans '>{customer.text} <span className='text-zinc-500 font-[400] text-[16px]'>since last week</span></p>
            </div>

        </div>
       ))}
    </div>
  )
}

export default CustomerSection

/*
 <div className='flex gap-1'> 
            <p className='h-10 w-2 bg-red-500'></p>   
            <div className='flex justify-between'>
                <div> 
                <p>{customer.title}</p>
                <h1>{customer.number}</h1>
                </div>

                <div>
                    <customer.icon1/>
                </div>
            </div>

               
            </div>

            <div className='flex'>
                <customer.icon2/>
                <p>{customer.text} of the week</p>
            </div>
=======

import React from 'react'
import { customerSection } from '../../../../utils/utilsData'

const CustomerSection = () => {
  return (
    <div className='flex flex-col xl:flex-row justify-between gap-4 pt-10 lg:pt-0'>
       {customerSection.map((customer,index) => (
        <div className="customerSection-preview flex flex-col w-[100%] gap-4 px-4 py-4 rounded-lg bg-white  shadow-lg  hover:shadow-none " key={index}>
           <div className='flex justify-between '>
             <div className='flex'>
                <p className='h-14 w-[3px] bg-[#36726c] mr-3'></p> 
                <div> 
                   <p className='t text-zinc-500 font-raleway text-[16px] font-[500]'>{customer.title}</p>
                   <h1 className='font-dmSans text-[26px] font-[600]'>{customer.number}</h1>
                </div>
             </div>

             <div className='bg-[#e4f8e4] rounded-md w-9 h-9 flex items-center justify-center'>
                <customer.icon1 className='w-6 h-7'/>
             </div>
           </div>

           <div className='flex items-center'>
                <customer.icon2 className='text-green-600  w-7'/>
                <p className='text-green-600 font-[500] text-[17px] font-dmSans '>{customer.text} <span className='text-zinc-500 font-[400] text-[16px]'>since last week</span></p>
            </div>

        </div>
       ))}
    </div>
  )
}

export default CustomerSection

/*
 <div className='flex gap-1'> 
            <p className='h-10 w-2 bg-red-500'></p>   
            <div className='flex justify-between'>
                <div> 
                <p>{customer.title}</p>
                <h1>{customer.number}</h1>
                </div>

                <div>
                    <customer.icon1/>
                </div>
            </div>

               
            </div>

            <div className='flex'>
                <customer.icon2/>
                <p>{customer.text} of the week</p>
            </div>
>>>>>>> e637b3d0f48a11f1dd9dbc602c58616be201a7bd
*/
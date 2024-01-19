import React from 'react'
import image from '../../../assets/lolade.jpg'
import { UilBell } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons'
import { FaCaretDown } from "react-icons/fa";

const HeaderSection = () => {
  return (
    <section className=' flex xl:flex-row mobile justify-between items-center'>
    <div className=''>
      <p className='text-[16px] text-zinc-500 font-raleway font-[500]'>Hi user,</p>
      <h1 className='font-raleway text-[26px] font-[600] -mt-0.5'>Welcome to Fintell</h1>
    </div>

    <div className='flex gap-4'>
      <div className=' flex gap-2 '>
      <input type='text' className='h-10 px-5 bg-white rounded-md  placeholder:text-[14px] ' placeholder='Search anything'/>
      <div className='bg-white rounded-md h-10 w-10 flex items-center justify-center'>
        <UilSearch color={"#183835"} size="23"/>
      </div>
      </div>

      <div className=' bg-white rounded-md h-10 w-10 flex items-center justify-center'>
        <UilBell color={"#183835"} size="23"/>
      </div>

     <div className='flex  items-center justify-center gap-4'>
     <img className='w-10 h-10 rounded-full object-cover' src={image} alt='image'/>
     <div className='flex items-center justify-center gap-2'>
     <h2 className='font-[500] text-[#000] text-[19px]'>User</h2>
     <FaCaretDown/>
     </div>
     </div>

    </div>
  </section>
  )
}

export default HeaderSection
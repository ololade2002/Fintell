
import React from 'react'
import { UilBars,UilTimes } from '@iconscout/react-unicons'
import { useState } from 'react';
import { UilShoppingBag } from '@iconscout/react-unicons'
import './Navbar.css'

const Navbar = () => {

  const [mobile,setMobile] = useState(false)

  return (
   <div className=' mx-auto '>
     <div className='flex justify-between  items-center py-[20px] md:py-[20px] px-3 xl:px-2 '>
       <div className='logo'>
       <a href='/' className='font-[600] font-raleway text-[32px]'>Fintell</a>
       </div>

       <div className={mobile ? 'mobileNav' :'webNav flex  items-center gap-6 xl:gap-[70px] 2xl:gap-40'} onClick={() => setMobile(false)} >
        <ul className='flex xl:flex-row flex-col items-center gap-[2rem] text-[24px] xl:text-[18px] text-[#183835] font-dmSans font-[500]'>
          <li className='hover:text-[#788374] '>Home</li>
          <li className='hover:text-[#788374] '>About</li>
          <li className='hover:text-[#788374] '>Features</li>
          <li className='hover:text-[#788374] '>Pricing</li>
          <li className='hover:text-[#788374] '>Contact</li>
        </ul>

        <div className='flex flex-col xl:flex-row gap-[1rem] items-center'>
        <UilShoppingBag className='w-7 h-7 webNav'/>
       <div className='flex flex-row gap-[1rem] xl:gap-[1rem] '>
       <button className='bg-[#183835] hover:bg-[rgba(24,56,53,0.9)] py-2.5 px-8 rounded-lg'>
          <a href="/signup" className=' text-white font-dmSans font-[400]  text-[18px]'>Sign up</a>
        </button>
        <button className='bg-[#183835] hover:bg-[rgba(24,56,53,0.9)] py-2.5 px-8 rounded-lg'>
          <a href="/login" className=' text-white font-dmSans font-[400]  text-[18px]'>Log in</a>
        </button>
       </div>
       </div>
       </div>

       

        {/*Mobile Nav */}
      <button className='menu flex items-center gap-3 xs:gap-3' onClick={() =>setMobile(!mobile)}>
      {mobile ? <UilTimes className='  w-10 h-10 text-black'/> : <UilBars className='w-10 h-10 text-black'/>  }  
      </button>

    </div>
   </div>
  )
}

export default Navbar



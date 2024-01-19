

import React from 'react'
import { UilAngleRight } from '@iconscout/react-unicons'
import fintell from '../../assets/FintellOne.jpg'

const HeroSection = () => {
  return (
    <div className='2xl:max-w-7xl  2xl:px-0 mx-auto'>
    <div className='flex flex-col xl:flex-row gap-6 sm:pt-4'>
     <div className='flex-1 flex flex-col justify-center gap-4 bg-[#ddf1e6] rounded-3xl px-6 py-10 xl:py-0' >
        <h2 className='text-[#183835] text-[60px] sm:text-[93px] font-[500] font-dmSans leading-[1.2]'>Finances made easy</h2>
        <p className='text-[#183835] text-[23px] font-[500] pb-3'>Effortlessly manage invoices, payroll, and other finances for your business.</p>
        <div className='flex gap-3  items-center bg-white width-f py-2 pl-3 pr-8 rounded-full'>
          <div className='bg-[#183835] h-8 w-8 hover:translate-x-2  transition rounded-full flex items-center justify-center'>
            <UilAngleRight className='text-white w-9 h-9 ' />
          </div>
          <p className='text-[#183835] font-dmSans text-[18px]'>Start your free trial</p>
        </div>

      </div>

      <div className='flex-1 '>
        <img src={fintell} className='rounded-3xl  xl:h-[600px] w-[100%] object-cover' alt='fintell'/>
      </div>
     </div>
    </div>
  )
}

export default HeroSection
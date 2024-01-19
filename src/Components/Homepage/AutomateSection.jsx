
import React from 'react'
import { UilAngleRight } from '@iconscout/react-unicons'

const AutomateSection = () => {
  return (
    <div  className='2xl:max-w-7xl  2xl:px-0 mx-auto py-20'>
        <div className='flex flex-col justify-between items-start gap-4 lg:gap-0 lg:items-center lg:flex-row pb-12'>
            <h1 className='text-[33px] md:text-[54px] w-full lg:w-[50%] font-dmSans font-[400] text-[#183835]'>We automate finances to help visionaries scale.</h1>
            <div className='flex gap-3  items-center ring-2 ring-[#183835] width-f py-2 pl-3 pr-8 rounded-full'>
               <div className='bg-[#183835] h-8 w-8 hover:translate-x-2  transition rounded-full flex items-center justify-center'>
                 <UilAngleRight className='text-white w-9 h-9 ' />
               </div>
               <p className='text-[#183835] font-dmSans text-[18px]'>Start your free trial</p>
            </div>
        </div>

        <div className='flex lg:flex-row flex-col items-center md:py-8 py-6 gap-6 md:gap-8'>
            <div className='bg-[#e2e2e2] md:px-[60px] md:pt-[45px] md:pb-[65px] px-[54px] py-[44px] rounded-full flex flex-1 flex-col items-center justify-center'>
                <h1 className='text-[70px] font-dmSans text-[#183835]'>126%</h1>
                <p className='text-[21px] sm:text-[23px] font-dmSans text-center text-[#183835] '>Avarage revenue increase</p>
            </div>

            <div className='bg-[#183835] md:px-[60px] md:pt-[45px] md:pb-[65px] px-[54px] py-[44px] rounded-full flex flex-1 flex-col items-center justify-center'>
                <h1 className='text-[70px] font-dmSans text-[#ddf1e6]'>3M+</h1>
                <p className='text-[21px] sm:text-[23px] font-dmSans text-center text-[#ddf1e6] '>On reduced expenses</p>
            </div>

            <div className='bg-[#ddf1e6] md:px-[60px] md:pt-[45px] md:pb-[65px] px-[54px] py-[44px] rounded-full flex flex-1 flex-col items-center justify-center'>
                <h1 className='text-[70px] font-dmSans text-[#183835]'>4.97/5</h1>
                <p className='text-[21px] sm:text-[23px] font-dmSans text-center text-[#183835] '>Average satisfaction rate</p>
            </div>

        </div>
    </div>
  )
}

export default AutomateSection
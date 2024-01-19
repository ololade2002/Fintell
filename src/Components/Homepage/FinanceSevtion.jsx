
import React from 'react'
import fintel1 from '../../assets/fintel1.jpeg'
import fintel2 from '../../assets/FintellThree.jpg'
import fintel3 from '../../assets/FintellFour.jpg'
import { UilAngleRight } from '@iconscout/react-unicons'

const FinanceSevtion = () => {
  return (
    <div className='2xl:max-w-7xl  2xl:px-0 mx-auto md:py-12 pb-24'>
      <div className='flex flex-col gap-16 sm:gap-20'>
      <div className='flex lg:flex-row flex-col gap-8 items-center justify-center'>
            <div className='flex-1'>
               <img className='rounded-[30px] h-[350px] sm:h-[90vh] object-cover' src={fintel1} alt='A man talking to a woman'/>
            </div>
            <div className='flex-1 flex flex-col gap-5 items-center '>
                <h2 className='text-[24px] sm:text-[45px] font-[400] leading-[1.3] text-center text-[#183835] font-dmSans'>Streamline your finances by creating accurate invoices in minutes.</h2>
                <div className='flex gap-1 items-center'>
                    <p className='text-[18px] text-[#183835] font-dmSans'>Request Demo</p>
                    <UilAngleRight color="#183835"/>
                </div>
            </div>
        </div>

        <div className='flex lg:flex-row-reverse flex-col gap-8 items-center justify-center'>
            <div className='flex-1'>
               <img className='rounded-[30px] h-[350px] sm:h-[90vh] object-cover' src={fintel2} alt='A man talking to a woman'/>
            </div>
            <div className='flex-1 flex flex-col gap-5 items-center '>
                <h2 className='text-[24px] sm:text-[45px] font-[400] leading-[1.3] text-center text-[#183835] font-dmSans'>Gain financial insights for smarter expense management and informed decision-making.</h2>
                <div className='flex gap-1 items-center'>
                    <p className='text-[18px] text-[#183835] font-dmSans'>Request Demo</p>
                    <UilAngleRight color="#183835"/>
                </div>
            </div>
        </div>

        <div className='flex lg:flex-row flex-col gap-8 items-center justify-center'>
            <div className='flex-1'>
               <img className='rounded-[30px] h-[350px] sm:h-[90vh] object-cover' src={fintel3} alt='A man talking to a woman'/>
            </div>
            <div className='flex-1 flex flex-col gap-5 items-center '>
                <h2 className='text-[24px] sm:text-[45px] font-[400] leading-[1.3] text-center text-[#183835] font-dmSans'>Take care of your team by making payroll a fast and enjoyable experience.</h2>
                <div className='flex gap-1 items-center'>
                    <p className='text-[18px] text-[#183835] font-dmSans'>Request Demo</p>
                    <UilAngleRight color="#183835"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FinanceSevtion
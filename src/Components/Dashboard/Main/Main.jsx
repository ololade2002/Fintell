

import React from 'react'
import CustomerSection from './CustomerSection';
import HeaderSection from './HeaderSection';
import AnalyticsSection from './AnalyticsSection';
import TableSection from './TableSection';

const Main = () => {
  return (
   <div className='py-2 '>
   <div className='bg-[#ecfeec] flex flex-col gap-6 rounded-[16px] mx-1 px-4 py-4'>
   <HeaderSection/>
   <CustomerSection/>
   <AnalyticsSection/>
   <TableSection/>
   </div>
   </div>
  )
}

export default Main


import React from 'react'
import InvoiceSection from './InvoiceSection'
import SalesSection from './SalesSection'

const AnalyticsSection = () => {
  return (
    <div className='flex xl:flex-row flex-col justify-between gap-4'>
        <InvoiceSection/>
        <SalesSection/>
    </div>
  )
}

export default AnalyticsSection
<<<<<<< HEAD

import React from 'react'
import Chart from 'react-apexcharts'

const InvoiceSection = () => {
  const data = {
    series: [64, 55, 41],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      labels: ["Total Paid", "Total Overdue", "Total Unpaid"],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
    }
  };



  return (
    <div className='bg-white invoice-section rounded-lg shadow-lg flex-1  py-4 px-4'>
      <h2 className='text-black font-raleway font-[500] text-[20px] pb-3'>Invoice Statistics</h2>
      <div className=" ">
      <Chart className=''
        options={data.options}
        series={data.series}
        type="donut"
      />
            
      </div>
    </div>
  )
}

export default InvoiceSection

=======

import React from 'react'
import Chart from 'react-apexcharts'

const InvoiceSection = () => {
  const data = {
    series: [64, 55, 41],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      labels: ["Total Paid", "Total Overdue", "Total Unpaid"],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
    }
  };



  return (
    <div className='bg-white invoice-section rounded-lg shadow-lg flex-1  py-4 px-4'>
      <h2 className='text-black font-raleway font-[500] text-[20px] pb-3'>Invoice Statistics</h2>
      <div className=" ">
      <Chart className=''
        options={data.options}
        series={data.series}
        type="donut"
      />
            
      </div>
    </div>
  )
}

export default InvoiceSection

>>>>>>> e637b3d0f48a11f1dd9dbc602c58616be201a7bd

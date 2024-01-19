
import React from 'react'
import Chart from 'react-apexcharts'

const SalesSection = () => {
  const data = { 
    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    options : {
      chart: {
      height: 350,
      type: 'area'
    },
    
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    }
}


  return (
    <div className='bg-white rounded-lg shadow-lg flex-1 py-4 px-4'>
      <h2 className='text-black font-raleway font-[500] text-[20px] pb-3'>Sales Analytics</h2>
     <div className=''>
     <Chart
        options={data.options}
        series={data.series}
        type="area"
      />
     </div>
    </div>
  )
}

export default SalesSection
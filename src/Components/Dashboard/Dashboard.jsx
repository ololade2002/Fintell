import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard  '>
     <div className="glass">
      <Sidebar/>
      <Main/>
     </div>
    </div>
  )
}

export default Dashboard
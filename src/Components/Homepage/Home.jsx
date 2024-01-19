
import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from './HeroSection'
import AutomateSection from './AutomateSection'
import FinanceSevtion from './FinanceSevtion'

const Home = () => {
  return (
    <div className='2xl:max-w-7xl px-4 sm:px-8 2xl:px-0 mx-auto'>
      <Navbar/>
      <HeroSection/>
      <AutomateSection/>
      <FinanceSevtion/>
      
    </div>
  )
}

export default Home
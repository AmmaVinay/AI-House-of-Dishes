/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../components/Banner/Banner'
import NavBarDishes from '../components/NavBarDishes'
import Choices from '../components/Choices/Choices'
import SeasonalTop from '../components/Seasonal-Top/SeasonalTop'
 

const Home = () => {
  return (
  <div className='overflow-x-hidden'>
  <Banner/>
  <NavBarDishes/>
  <Choices/>
  <SeasonalTop/>
  </div>


  )
}

export default Home

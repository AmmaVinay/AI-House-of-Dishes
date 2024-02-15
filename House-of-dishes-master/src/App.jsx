/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SingleDish from './pages/SingleDish'
import Cooking from './pages/Cooking'
 import Login from './pages/Login'
import Layout from './components/Layout'
import TeamPage from './pages/TeamPage'
import LuxuryDishes from './components/Dishes/Luxury-Dishes/LuxuryDishes'
import Spanish from './components/Dishes/Luxury-Dishes/Spain/Spanish'
import SpainishLuxuryBreakFast from './components/Dishes/Luxury-Dishes/Spain/SpainishLuxuryBreakFast'
import SpainishLuxuryLunch from './components/Dishes/Luxury-Dishes/Spain/SpainishLuxuryLunch'
import SpainishLuxuryDinner from './components/Dishes/Luxury-Dishes/Spain/SpainishLuxuryDinner'

import Indian from './components/Dishes/Luxury-Dishes/India/Indian'
import IndianLuxuryBreakFast from './components/Dishes/Luxury-Dishes/India/IndianLuxuryBreakFast'
import IndianLuxuryLunch from './components/Dishes/Luxury-Dishes/India/IndianLuxuryLunch'
import IndianLuxuryDinner from './components/Dishes/Luxury-Dishes/India/IndianLuxuryDinner'
import IndianStatesDishes from './components/Dishes/All-NavItem/IndianStatesDishes'
 const App = () => {
  return (
    <>
     <BrowserRouter>
     <Layout/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/singledish' element={<SingleDish/>}/>
      <Route path='/cooking' element={<Cooking/>}/>
      <Route path='/teampage' element={<TeamPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Luxury-Dishes' element={<LuxuryDishes />}/>
      <Route path='/Luxury-Dishes/Spanish' element={<Spanish />} />
      <Route path='/Luxury-Dishes/Spanish/SpainishLuxuryBreakFast' element={<SpainishLuxuryBreakFast />} />
      <Route path='/Luxury-Dishes/Spanish/SpainishLuxuryLunch' element={<SpainishLuxuryLunch />} />
      <Route path='/Luxury-Dishes/Spanish/SpainishLuxuryDinner' element={<SpainishLuxuryDinner />} />
      <Route path='/Luxury-Dishes/Indian' element={<Indian />} />
      <Route path='/Luxury-Dishes/Indian/IndianLuxuryBreakFast' element={<IndianLuxuryBreakFast />} />
      <Route path='/Luxury-Dishes/Indian/IndianLuxuryLunch' element={<IndianLuxuryLunch />} />
      <Route path='/Luxury-Dishes/Indian/IndianLuxuryDinner' element={<IndianLuxuryDinner />} />
      <Route path='/All-Indian-Dishes' element={<IndianStatesDishes />} />    
       </Routes> 
     </BrowserRouter>
     </>
  )
}

export default App

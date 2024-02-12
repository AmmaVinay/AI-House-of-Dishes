/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SingleDish from './pages/SingleDish'
import Cooking from './pages/Cooking'
 import Login from './pages/Login'
import Layout from './components/Layout'
import TeamPage from './pages/TeamPage'
import LuxuryDishes from './components/Dishes/Luxury-Dishes/Spain/LuxuryDishes'
import Spanish from './components/Dishes/Luxury-Dishes/Spain/Spanish'
import SpainishLuxuryBreakFast from './components/Dishes/Luxury-Dishes/Spain/SpainishLuxuryBreakFast'
import SpainishLuxuryLunch from './components/Dishes/Luxury-Dishes/Spain/SpainishLuxuryLunch'
import SpainishLuxuryDinner from './components/Dishes/Luxury-Dishes/Spain/SpainishLuxuryDinner'
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

      </Routes> 
     </BrowserRouter>
     </>
  )
}

export default App

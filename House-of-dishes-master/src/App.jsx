/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SingleDish from './pages/SingleDish'
import Cooking from './pages/Cooking'
 import Login from './pages/Login'
import Layout from './components/Layout'
import TeamPage from './pages/TeamPage'
import LuxuryDishes from "./components/Dishes/Luxury-Dishes/LuxuryDishes";
import Spanish from './components/Dishes/Spanish'
import LuxuryBreakFast from './components/Dishes/Luxury-Dishes/LuxuryBreakFast'
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
      <Route path='/Luxury-Dishes/Spanish/LuxuryBreakFast' element={<LuxuryBreakFast />} />
      </Routes> 
     </BrowserRouter>
     </>
  )
}

export default App

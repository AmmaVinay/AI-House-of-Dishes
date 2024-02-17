/* eslint-disable no-unused-vars */
import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleDish from './pages/SingleDish';
import Cooking from './pages/Cooking';
import Login from './pages/Login';
import Layout from './components/Layout';
import TeamPage from './pages/TeamPage';
import LuxuryDishes from './components/Dishes/Luxury-Dishes/LuxuryDishes';
import Spanish from './components/Dishes/Luxury-Dishes/Spain/Spanish';
import SpainishLuxuryBreakFast from './components/Dishes/Luxury-Dishes/Spain/SpainishLuxuryBreakFast';
import SpainishLuxuryLunch from './components/Dishes/Luxury-Dishes/Spain/SpainishLuxuryLunch';
import SpainishLuxuryDinner from './components/Dishes/Luxury-Dishes/Spain/SpainishLuxuryDinner';

import Indian from './components/Dishes/Luxury-Dishes/India/Indian';
import IndianLuxuryBreakFast from './components/Dishes/Luxury-Dishes/India/IndianLuxuryBreakFast';
import IndianLuxuryLunch from './components/Dishes/Luxury-Dishes/India/IndianLuxuryLunch';
import IndianLuxuryDinner from './components/Dishes/Luxury-Dishes/India/IndianLuxuryDinner';

import IndianStatesDishes from './components/Dishes/All-NavItem/IndianStatesDishes';
import AndhraPradesh from './components/Dishes/All-NavItem/AndhraPradeshState/AndhraPradesh';
import AndhraPradeshLuxuryBreakFast from './components/Dishes/All-NavItem/AndhraPradeshState/AndhraPradeshLuxuryBreakFast';
import AndhraPradeshLuxuryLunch from './components/Dishes/All-NavItem/AndhraPradeshState/AndhraPradeshLuxuryLunch';
import AndhraPradeshLuxuryDinner from './components/Dishes/All-NavItem/AndhraPradeshState/AndhraPradeshLuxuryDinner';

import ArunachalPradesh from './components/Dishes/All-NavItem/ArunachalPradeshState/ArunachalPradesh';
import ArunachalPradeshLuxuryBreakFast from './components/Dishes/All-NavItem/ArunachalPradeshState/ArunachalPradeshLuxuryBreakFast';
import ArunachalPradeshLuxuryLunch from './components/Dishes/All-NavItem/ArunachalPradeshState/ArunachalPradeshLuxuryLunch';
import ArunachalPradeshLuxuryDinner from './components/Dishes/All-NavItem/ArunachalPradeshState/ArunachalPradeshLuxuryDinner';

import QuickDishes from './components/Dishes/Quick-Dishes/QuickDishes';
import HealthyDishes from './components/Dishes/Healthy-Dishes/HealthyDishes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cooking' element={<Cooking />} />
          <Route path='/teampage' element={<TeamPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Luxury-Dishes' element={<LuxuryDishes />} />
          <Route path='/Luxury-Dishes/Spanish' element={<Spanish />} />
          <Route path='/Luxury-Dishes/Spanish/SpainishLuxuryBreakFast' element={<SpainishLuxuryBreakFast />} />
          <Route path='/Luxury-Dishes/Spanish/SpainishLuxuryLunch' element={<SpainishLuxuryLunch />} />
          <Route path='/Luxury-Dishes/Spanish/SpainishLuxuryDinner' element={<SpainishLuxuryDinner />} />
          <Route path='/Luxury-Dishes/Indian' element={<Indian />} />
          <Route path='/Luxury-Dishes/Indian/IndianLuxuryBreakFast' element={<IndianLuxuryBreakFast />} />
          <Route path='/Luxury-Dishes/Indian/IndianLuxuryLunch' element={<IndianLuxuryLunch />} />
          <Route path='/Luxury-Dishes/Indian/IndianLuxuryDinner' element={<IndianLuxuryDinner />} />
          <Route path='/All-Indian-Dishes' element={<IndianStatesDishes />} />
          <Route path='/All-Indian-Dishes/AndhraPradesh' element={<AndhraPradesh />} />
          <Route path='/All-Indian-Dishes/AndhraPradesh/AndhraPradeshLuxuryBreakFast' element={<AndhraPradeshLuxuryBreakFast />} />
          <Route path='/All-Indian-Dishes/AndhraPradesh/AndhraPradeshLuxuryLunch' element={<AndhraPradeshLuxuryLunch />} />
          <Route path='/All-Indian-Dishes/AndhraPradesh/AndhraPradeshLuxuryDinner' element={<AndhraPradeshLuxuryDinner />} />
          <Route path='/All-Indian-Dishes/ArunachalPradesh' element={<ArunachalPradesh />} />
          <Route path='/All-Indian-Dishes/ArunachalPradesh/ArunachalPradeshLuxuryBreakFast' element={<ArunachalPradeshLuxuryBreakFast />} />
          <Route path='/All-Indian-Dishes/ArunachalPradesh/ArunachalPradeshLuxuryLunch' element={<ArunachalPradeshLuxuryLunch />} />
          <Route path='/All-Indian-Dishes/ArunachalPradesh/ArunachalPradeshLuxuryDinner' element={<ArunachalPradeshLuxuryDinner />} />
          <Route path='/Quick-Dishes' element={<QuickDishes />} />
          <Route path='/Healthy-Dishes' element={<HealthyDishes />} />
          <Route path='/Pesarattu-info' element={<SingleDish />} />
          <Route path='/upma-info' element={<SingleDish />} />
          <Route path='/Andhra-Mutton-Curry-info' element={<SingleDish />} />
          <Route path='/Chapala-Pulusu-Fish-Stew-info' element={<SingleDish />} />
            <Route path='/Andhra-Mutton-Curry-info' element={<SingleDish />} />
            <Route path='/Andhra-Chicken-Curry-Lunch-info' element={<SingleDish />} />
            <Route path='/Gongura-Chicken-info' element={<SingleDish />} />
            <Route path='/Thukpa-info' element={<SingleDish />} />
            <Route path='/Bamboo-Shoot-Fried-Rice-info' element={<SingleDish />} />
            <Route path='/Thenthuk-Soup-info' element={<SingleDish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cooking from './pages/Cooking';
import Login from './pages/Login';
import TeamPage from './pages/TeamPage';
import SingleDish from './pages/SingleDish';
import LuxuryDishes from './components/Dishes/Luxury-Dishes/LuxuryDishes';
import Spanish from './components/Dishes/Luxury-Dishes/Spain/Spanish';
import QuickDishes from './components/Dishes/Quick-Dishes/QuickDishes';
import HealthyDishes from './components/Dishes/Healthy-Dishes/HealthyDishes';
import IndianStatesDishes from './components/Dishes/All-NavItem/IndianStatesDishes';
import AndhraPradesh from './components/Dishes/All-NavItem/AndhraPradeshState/AndhraPradesh';
import ArunachalPradesh from './components/Dishes/All-NavItem/ArunachalPradeshState/ArunachalPradesh';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/cooking', element: <Cooking /> },
  { path: '/teampage', element: <TeamPage /> },
  { path: '/login', element: <Login /> },
  {
    path: '/Luxury-Dishes',
    element: <LuxuryDishes />,
    children: [
      { path: 'Spanish', element: <Spanish />, children: [
        { path: 'SpainishLuxuryBreakFast', element: <SpainishLuxuryBreakFast /> },
        { path: 'SpainishLuxuryLunch', element: <SpainishLuxuryLunch /> },
        { path: 'SpainishLuxuryDinner', element: <SpainishLuxuryDinner /> },
      ] },
      { path: 'Indian', element: <Indian />, children: [
        { path: 'IndianLuxuryBreakFast', element: <IndianLuxuryBreakFast /> },
        { path: 'IndianLuxuryLunch', element: <IndianLuxuryLunch /> },
        { path: 'IndianLuxuryDinner', element: <IndianLuxuryDinner /> },
      ] },
    ],
  },
  { path: '/All-Indian-Dishes', element: <IndianStatesDishes />, children: [
    { path: 'AndhraPradesh', element: <AndhraPradesh />, children: [
      { path: 'AndhraPradeshLuxuryBreakFast', element: <AndhraPradeshLuxuryBreakFast /> },
      { path: 'AndhraPradeshLuxuryLunch', element: <AndhraPradeshLuxuryLunch /> },
      { path: 'AndhraPradeshLuxuryDinner', element: <AndhraPradeshLuxuryDinner /> },
    ] },
    { path: 'ArunachalPradesh', element: <ArunachalPradesh />, children: [
      { path: 'ArunachalPradeshLuxuryBreakFast', element: <ArunachalPradeshLuxuryBreakFast /> },
      { path: 'ArunachalPradeshLuxuryLunch', element: <ArunachalPradeshLuxuryLunch /> },
      { path: 'ArunachalPradeshLuxuryDinner', element: <ArunachalPradeshLuxuryDinner /> },
    ] },
  ] },
  { path: '/Quick-Dishes', element: <QuickDishes /> },
  { path: '/Healthy-Dishes', element: <HealthyDishes /> },
  { path: '/Pesarattu-info', element: <SingleDish /> },
  { path: '/upma-info', element: <SingleDish /> },
  { path: '/Andhra-Mutton-Curry-info', element: <SingleDish /> },
  { path: '/Chapala-Pulusu-Fish-Stew-info', element: <SingleDish /> },
];

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          {routes.map(({ path, element, children }) => (
            <Route key={path} path={path} element={element}>
              {children && children.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

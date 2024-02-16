// LuxuryDishes.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { CountryFlag } from '../../../Data/CountryFlagLuxuryData/CountryFlag';
import RecommendedDishes from '../../../components/RecommendedDIshes/RecommendedDishes'
import Footer from '../../../components/FooterItem/Footer'
function HealthyDishes() {
const [viewMore, setViewMore] = useState(0);
const [slidesToShow, setSlidesToShow] = useState(4);
const [SearchCountry, setSearchCountry] = useState('');
  const filteredCountry = CountryFlag.filter((country) =>
    country.countryName.toLowerCase().includes(SearchCountry.toLowerCase())
  );
    useEffect(() => {
    if (SearchCountry.trim() !== '') {
      setViewMore(true);
    }
  }, [SearchCountry]);

const settings = {
dots: false,
infinite: true,
slidesToShow: slidesToShow,
slidesToScroll: 3,
    autoplaySpeed: 2000,
speed: 500,
};

useEffect(() => {
const handleResize = () => {
const screenWidth = window.innerWidth;

if (screenWidth >= 1200) {
setSlidesToShow(viewMore ? dishes.length : 5);
} else if (screenWidth >= 992) {
setSlidesToShow(viewMore ? dishes.length : 4);
} else if (screenWidth >= 768) {
setSlidesToShow(viewMore ? dishes.length : 3);
} else if (screenWidth >= 576) {
setSlidesToShow(viewMore ? dishes.length : 2);
} else {
setSlidesToShow(viewMore ? dishes.length : 2);
}
};

handleResize();

window.addEventListener("resize", handleResize);

return () => {
window.removeEventListener("resize", handleResize);
};
}, []);

 return (
<div className='bg-[#fff] min-h-screen'>
    <div>
        <h1 className='text-center text-7xl text-black font-bold py-12'>Quick Dishes</h1>
        <div className="flex justify-center">
            <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
                <div className="absolute inset-y-0   flex items-center px-3 pointer-events-none">
                    <FiSearch size={25} className=' text-gray-500 dark:text-gray-400' />
                </div>
                <input type="search" value={SearchCountry} onChange={(e) => setSearchCountry(e.target.value)} placeholder="Search country, dishes" className="border-2 text-sm font-medium py-2 sm:py-3 border-green-400 rounded-lg px-6 sm:px-10 text-start text-black focus:border-black outline-none w-full" />
                <div className="absolute inset-y-0 right-2 flex items-center pr-3 pointer-events-none">
                    <FaMicrophone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>

            </div>
        </div>

    </div>
    <div className='mx-12 mb-20'>
        <div className='flex flex-row items-center justify-between '>
            <div className='flex text-black text-[2rem] mb-6 mt-12'>
                <h1 className='font-bold items-baseline text-xl sm:text-2xl md:text-4xl'> Countries</h1>
            </div>
            <button onClick={(e)=> {
                setViewMore(!viewMore);
                }}
                className='relative ml-12 text-black px-2 mt-12 h-7'
                >
                <div className='flex flex-row items-center text-black justify-center '>
                    <p className='mb-[0.25rem] font-bold text-lg sm:text-xl md:text-2xl'>{!viewMore ? 'See More' : 'See Less'}</p>
                    <FaAngleRight />
                </div>
            </button>


        </div>

        {!viewMore && (
        <div className='slider-container container'>
            <Slider {...settings}>
                {filteredCountry.map((dish, index) => (
                <div key={index} className='text-center'>
                        <Link to={dish.LuxuryDishesPath}>
                     <div className='flex py-8 flex-col items-center hover:scale-110 transition-transform duration-300 transition'>
                        <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} className='object-cover border-2 h-48 shadow-xl shadow-slate-400' src={`https://flagcdn.com/${dish.countryFlag}.svg`} alt={dish.countryName} />
                        <p className='mt-3 text-center text-lg font-bold'>{dish.countryName}</p>
                    </div>
                    </Link>
                </div>
                ))}
            </Slider>

        </div>
        )}

        <div className='flex pl-12 flex-row gap-x-6 flex-wrap gap-y-6'>
            {filteredCountry.map((dish, index) => (
            <>
                {!viewMore && index < 4 ? ( <></>
                ) : (
                <>
                    {viewMore ? (
                    // Use data from your dishes array, e.g., dish.dishName and dish.dishImage
                    <div key={index} className='text-center'>
                        <Link to={dish.LuxuryDishesPath}>
                        <div className='flex py-8 flex-col items-center hover:scale-110 transition-transform duration-300 transition'>
                            <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} className='object-cover border-2 h-48 shadow-xl shadow-slate-400' src={`https://flagcdn.com/${dish.countryFlag}.svg`} alt={dish.countryName} />
                            <p className='mt-2 text-center text-lg font-bold'>{dish.countryName}</p>
                        </div>
                        </Link>
                    </div>
                    ) : (
                    <></>
                    )}
                </>
                )}
            </>
            ))}
        </div>
         </div>
    
         <div>
             <RecommendedDishes />
                   <Footer />

         </div>

</div>
);
}

export default HealthyDishes;

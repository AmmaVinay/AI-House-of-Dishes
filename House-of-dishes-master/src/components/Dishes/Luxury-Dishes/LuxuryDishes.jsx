// LuxuryDishes.js
import React from 'react';
import { Link } from 'react-router-dom';
 import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'; // Import the Slider component
import { useState, useEffect } from "react";
 import { FaAngleRight } from "react-icons/fa6";

function LuxuryDishes() {
const dishes = [
  {
    countryName: 'Spanish',
    countryFlag: 'es',
    LuxuryDishesPath: '/Luxury-Dishes/Spanish'
  },
  {
    countryName: 'Indian',
    countryFlag: 'in',
    LuxuryDishesPath: '/Luxury-Dishes/Indian'
  },
  {
    countryName: 'Mexican',
    countryFlag: 'mx',
    LuxuryDishesPath: '/Luxury-Dishes/Mexican'
  },
  {
    countryName: 'French',
    countryFlag: 'fr',
    LuxuryDishesPath: '/Luxury-Dishes/French'
  },
  {
    countryName: 'Italian',
    countryFlag: 'it',
    LuxuryDishesPath: '/Luxury-Dishes/Italian'
  },
  {
    countryName: 'Japanese',
    countryFlag: 'jp',
    LuxuryDishesPath: '/Luxury-Dishes/Japanese'
  },
  {
    countryName: 'Chinese',
    countryFlag: 'cn',
    LuxuryDishesPath: '/Luxury-Dishes/Chinese'
  },
  {
    countryName: 'Turkish',
    countryFlag: 'tr',
    LuxuryDishesPath: '/Luxury-Dishes/Turkish'
  },
  {
    countryName: 'Thai',
    countryFlag: 'th',
    LuxuryDishesPath: '/Luxury-Dishes/Thai'
  },
  {
    countryName: 'Greek',
    countryFlag: 'gr',
    LuxuryDishesPath: '/Luxury-Dishes/Greek'
  },
  {
    countryName: 'Russian',
    countryFlag: 'ru',
    LuxuryDishesPath: '/Luxury-Dishes/Russian'
  },
  {
    countryName: 'Brazilian',
    countryFlag: 'br',
    LuxuryDishesPath: '/Luxury-Dishes/Brazilian'
  },
  {
    countryName: 'Moroccan',
    countryFlag: 'ma',
    LuxuryDishesPath: '/Luxury-Dishes/Moroccan'
  },
  {
    countryName: 'Lebanese',
    countryFlag: 'lb',
    LuxuryDishesPath: '/Luxury-Dishes/Lebanese'
  },
  {
    countryName: 'Vietnamese',
    countryFlag: 'vn',
    LuxuryDishesPath: '/Luxury-Dishes/Vietnamese'
  },
  {
    countryName: 'South Korean',
    countryFlag: 'kr',
    LuxuryDishesPath: '/Luxury-Dishes/South-Korean'
  },
  {
    countryName: 'Swiss',
    countryFlag: 'ch',
    LuxuryDishesPath: '/Luxury-Dishes/Swiss'
  },
  {
    countryName: 'Austrian',
    countryFlag: 'at',
    LuxuryDishesPath: '/Luxury-Dishes/Austrian'
  },
  {
    countryName: 'Australian',
    countryFlag: 'au',
    LuxuryDishesPath: '/Luxury-Dishes/Australian'
  },
  // Add more dishes as
  ]
  const [viewMore, setViewMore] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
        swipeToSlide: true,
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
        <h1 className='text-center text-7xl text-black font-bold py-12'>Luxury Dishes</h1>
      </div>
      <div className='mx-12'>
        <div className='flex flex-row items-center justify-between '>
          <div className='flex text-black text-[2rem] mb-6 mt-12'>
           <h1> Countries</h1>
          </div>
          <button
            onClick={(e) => {
              setViewMore(!viewMore);
            }}
            className='relative ml-12 text-black px-2 mt-12 h-7'
          >
            <div className='flex flex-row items-center text-black justify-center '>
              <p className='mb-[0.25rem]'>{!viewMore ? 'See More' : 'See Less'}</p>
              <FaAngleRight />
            </div>
          </button>
          

        </div>

        {!viewMore && (
          <div className='slider-container container'>
            <Slider {...settings}>
              {dishes.map((dish, index) => (
                <div key={index} className='text-center'>
                  <Link to={dish.LuxuryDishesPath}>
                    <div className='flex py-8 flex-col items-center hover:scale-110 transition-transform duration-300 transition'>
                      <img
                        style={{ width: '200px', height: '200px', borderRadius: '50%' }}
                        className='object-cover border-2 h-48 shadow-xl shadow-slate-400'
                        src={`https://flagcdn.com/${dish.countryFlag}.svg`}
                        alt={dish.countryName}
                      />
                      <p className='mt-3 text-center text-lg font-bold'>{dish.countryName}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
            
          </div>
        )}

        <div className='flex pl-12 flex-row gap-x-6 flex-wrap gap-y-6'>
          {dishes.map((dish, index) => (
            <>
              {!viewMore && index < 4 ? (
                <></>
              ) : (
                <>
                  {viewMore ? (
                    // Use data from your dishes array, e.g., dish.dishName and dish.dishImage
                <div key={index} className='text-center'>
                  <Link to={dish.LuxuryDishesPath}>
                    <div className='flex py-8 flex-col items-center hover:scale-110 transition-transform duration-300 transition'>
                      <img
                        style={{ width: '200px', height: '200px', borderRadius: '50%' }}
                        className='object-cover border-2 h-48 shadow-xl shadow-slate-400'
                        src={`https://flagcdn.com/${dish.countryFlag}.svg`}
                        alt={dish.countryName}
                      />
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
    </div>
  );
}

export default LuxuryDishes;

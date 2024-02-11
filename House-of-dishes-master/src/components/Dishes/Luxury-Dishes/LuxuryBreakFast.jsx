import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { SpainBreakFast } from '../../../Data/SpainDishes/SpainBreakFast';
function Dishes({ title, imageUrl, rating, time }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <>
    <div className="rounded-lg h-[325px] flex flex-row flex-wrap  w-[325px] cursor-pointer hover:scale-110 transition-all duration-300">
      <div className="cards-container">
        <div className="card">
          <div class="card-media">
            <img className="rounded-lg w-[100%] h-[200px] object-cover border-2 z-[1000000]" src={imageUrl} alt={title} />
          </div>
          <div class="card-description">
            <div class="about-place">
              <div class="place">
                <p class="place-name">{title}</p>
                <p className="flex ">
                  {[...Array(fullStars)].map((_, index) => (
                    <FaStar className='text-yellow-500' key={index} />
                  ))}
                  {hasHalfStar && (
                    <FaStarHalfAlt className='text-yellow-500' />
                  )}
                  {[...Array(5 - Math.ceil(rating))].map((_, index) => (
                    <FaStar key={index} className='text-zinc-800' />
                  ))}
                </p>
              </div>
              <div class="place-review">
                <p className="text-black font-semibold">Prep Time</p>
                <p class="per-person mt-2 mr-2 font-semibold"> {time} min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

const LuxuryBreakFast = () => {
  return (
    <div className="mx-12">
            <div>
        <h1 className='py-12 text-lg md:text-3xl text-center font-bold text-black'>Spanish BreakFast Dishes</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {SpainBreakFast.map((dish, index) => (
          <div key={index}>
            <Dishes title={dish.dishName} imageUrl={dish.dishImage} time={60} rating={4.5} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuxuryBreakFast;

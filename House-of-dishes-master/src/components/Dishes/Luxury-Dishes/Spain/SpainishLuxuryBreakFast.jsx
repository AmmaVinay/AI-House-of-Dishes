import React from 'react';
import { SpainBreakFast } from '../../../../Data/SpainDishes/SpainBreakFast';
 import SeeMore from './SeeMore';
const SpainishLuxuryBreakFast = () => {
  return (
    <div className="mx-12">
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold text-black'>Spanish BreakFast Dishes</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {SpainBreakFast.map((dish, index) => (
          <div key={index}>
            <SeeMore title={dish.dishName} imageUrl={dish.dishImage} time={60} rating={4.5} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpainishLuxuryBreakFast;

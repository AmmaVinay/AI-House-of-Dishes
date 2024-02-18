import React from 'react';
 import { SpanishBreakFast } from '../../../../Data/LuxuryDishesData/SpanishDishes/SpanishBreakFast';
 import Card2 from '../../../Card2';
const SpanishLuxuryBreakFast = () => {
  return (
    <div className="mx-12">
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold text-black'>Spanish BreakFast Dishes</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {SpanishBreakFast.map((dish, index) => (
          <div key={index}>
            <Card2 title={dish.dishName} dishPath={dish.dishPath} imageUrl={dish.dishImage} time={60} rating={4.5} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpanishLuxuryBreakFast;

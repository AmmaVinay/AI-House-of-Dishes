import React from 'react';
import { SpanishLunch } from '../../../../Data/LuxuryDishesData/SpanishDishes/SpanishLunch';
import Card2 from '../../../Card2';
const SpainishLuxuryLunch = () => {
  return (
    <div className="mx-12">
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold text-black'>Spanish Lunch Dishes</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {SpanishLunch.map((dish, index) => (
          <div key={index}>
            <Card2 title={dish.dishName} imageUrl={dish.dishImage} time={60} rating={4.5} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpainishLuxuryLunch;

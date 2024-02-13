import React from 'react';
import { SpainDinner } from '../../../../Data/LuxuryDishesData/SpainDishes/SpainDinner'; // Corrected import
 import Card2 from '../../../Card2';

const SpainishLuxuryDinner = () => {
  return (
    <div className="mx-12">
      <div>
        <h1 className='py-12 text-lg md:text-3xl text-center font-bold text-black'>Spanish Dinner Dishes</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {SpainDinner.map((dish, index) => (
          <div key={index}>
            <Card2 title={dish.dishName} imageUrl={dish.dishImage} time={60} rating={4.5} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpainishLuxuryDinner;

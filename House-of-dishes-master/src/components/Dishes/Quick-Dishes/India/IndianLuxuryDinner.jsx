import React from 'react';
import { IndianDinner } from '../../../../Data/LuxuryDishesData/IndianDishes/IndianDinner';
import Card2 from '../../../Card2';

const IndianLuxuryDinner = () => {
  return (
    <div className="mx-12">
      <div>
        <h1 className='py-12 text-lg md:text-3xl text-center font-bold text-black'>Indian Dinner Dishes</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {IndianDinner.map((dish, index) => (
          <div key={index}>
            <Card2 title={dish.dishName} dishPath={dish.dishPath} imageUrl={dish.dishImage} time={60} rating={4.5} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndianLuxuryDinner;

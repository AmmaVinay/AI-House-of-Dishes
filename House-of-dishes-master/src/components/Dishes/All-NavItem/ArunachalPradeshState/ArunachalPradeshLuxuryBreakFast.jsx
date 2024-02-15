import React from 'react';
import { ArunachalPradeshBreakFast } from '../../../../Data/IndianStates/ArunachalPradesh/ArunachalPradeshBreakfast';
import Card2 from '../../../Card2';
const ArunachalPradeshLuxuryBreakFast = () => {
  return (
    <div className="mx-12">
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold text-black'>Arunachal Pradesh BreakFast Dishes</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {ArunachalPradeshBreakFast.map((dish, index) => (
          <div key={index}>
            <Card2 title={dish.dishName} imageUrl={dish.dishImage} time={60} rating={4.5} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArunachalPradeshLuxuryBreakFast;

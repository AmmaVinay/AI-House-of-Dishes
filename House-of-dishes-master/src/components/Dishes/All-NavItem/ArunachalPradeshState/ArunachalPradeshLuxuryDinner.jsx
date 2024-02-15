import React from 'react';
import { ArunachalPradeshDinner } from '../../../../Data/IndianStates/ArunachalPradesh/ArunachalPradeshDinner';
import Card2 from '../../../Card2';

const ArunachalPradeshLuxuryDinner = () => {
  return (
    <div className="mx-12">
      <div>
        <h1 className='py-12 text-lg md:text-3xl text-center font-bold text-black'>Arunachal Pradesh Dishes</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {ArunachalPradeshDinner.map((dish, index) => (
          <div key={index}>
            <Card2 title={dish.dishName} imageUrl={dish.dishImage} time={60} rating={4.5} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArunachalPradeshLuxuryDinner;

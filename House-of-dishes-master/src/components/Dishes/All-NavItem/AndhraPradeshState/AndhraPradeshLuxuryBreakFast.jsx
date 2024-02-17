import React from 'react';
import { Link } from 'react-router-dom';  // Import Link component
import { AndhraPradeshBreakFast } from '../../../../Data/IndianStates/AndhraPradeshData/AndhraPradeshBreakFast';
import Card2 from '../../../Card2';

const AndhraPradeshLuxuryBreakFast = () => {
  return (
    <div className="mx-12">
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold text-black'>Andhra Pradesh BreakFast Dishes</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {AndhraPradeshBreakFast.map((dish, index) => (
          <div key={index}>
            <Link to={dish.dishPath}>
              <Card2 title={dish.dishName} imageUrl={dish.dishImage} time={60} rating={4.5} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AndhraPradeshLuxuryBreakFast;

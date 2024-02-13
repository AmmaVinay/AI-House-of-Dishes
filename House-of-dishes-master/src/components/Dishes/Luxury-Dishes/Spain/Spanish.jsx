import React from 'react';
 import Card3 from '../../../Card3'
import { SpainBreakFast } from '../../../../Data/LuxuryDishesData/SpainDishes/SpainBreakFast';
import { SpainLunch } from '../../../../Data/LuxuryDishesData/SpainDishes/SpainLunch';
import { SpainDinner } from '../../../../Data/LuxuryDishesData/SpainDishes/SpainDinner';
function Spanish() {
return (
<div className='bg-[#fff] min-h-screen'>
    <div className=' '>
        <h1 className='py-12 text-2xl sm:text-4xl md:text-6xl text-center font-bold text-black'>Spanish Dishes</h1>
        <div>
            <Card3 title="Breakfast"  famousDish={SpainBreakFast}/>
        </div>
        <div>
            <Card3 title="Lunch"  famousDish={SpainLunch}/>
        </div>
        <div>
            <Card3 title="Dinner"  famousDish={SpainDinner}/>
        </div>
    </div>
</div>
);
}

export default Spanish;

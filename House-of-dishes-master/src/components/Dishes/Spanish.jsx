import React from 'react';

import Card3 from '../Card3';
import { SpainBreakFast } from '../../Data/SpainDishes/SpainBreakFast';


function Spanish() {
return (
<div className='bg-[#fff] min-h-screen'>

    <div className=' '>
        <h1 className='py-12 text-lg md:text-3xl text-center font-bold text-black'>Spanish Dishes</h1>
        <div>
            <Card3 title="Breakfast"  famousDish={SpainBreakFast}/>
        </div>

        <div>
            <Card3 title="Lunch"  famousDish={SpainBreakFast}/>
        </div>

        <div>
            <Card3 title="Dinner"  famousDish={SpainBreakFast}/>
        </div>

    </div>
</div>
);
}

export default Spanish;

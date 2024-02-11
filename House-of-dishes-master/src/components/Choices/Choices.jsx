/* eslint-disable no-unused-vars */
import React from 'react'
import Card1 from '../Card1'
import ChoicesData from '../../Data/ChoicesData'
import CuisineData from '../../Data/CuisineData'

const Choices = () => {
  return (
    <div className='text-zinc-900 bg-white flex flex-col justify-center items-center py-8'>

        {/* WHAT DO U WANT TO COOK */}
        <h1 className='text-3xl font-semibold pb-8 text-yellow-500'>What do you want to cook</h1>
        <div className="card-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4 lg:gap-16 items-center justify-center">
                {ChoicesData.map((item, index) => (
                    <Card1
                        key={index}
                        title={item.title}
                        imageUrl={item.imageUrl}
                    />
                ))}
        </div>

        {/* CUISINE */}

        <h1 className='text-3xl font-semibold py-8 text-yellow-500'>Cuisine</h1>
        <div className="card-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4 lg:gap-16 items-center justify-center">
                {CuisineData.map((item, index) => (
                    <Card1
                        key={index}
                        title={item.title}
                        imageUrl={item.imageUrl}
                    />
                ))}
        </div>

    </div>
  )
}

export default Choices
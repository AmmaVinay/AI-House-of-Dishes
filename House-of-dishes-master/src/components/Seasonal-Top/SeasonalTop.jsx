
import Card2 from '../Card2'
import SeasonalDishesData from '../../Data/SeasonalDishesData'
import TopDishesData from '../../Data/TopDishesData'

const SeasonalTop = () => {
  return (
    <div className="text-zinc-800 bg-[#e6e6fa] flex flex-col justify-center items-center py-16">
      {/* SEASONAL DISHES */}
      <h1 className='text-3xl font-semibold pb-8'>Seasonal Dishes</h1>
      <div className="card-container grid grid-cols-1 place-items-center  md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-16 items-center justify-center">
      {SeasonalDishesData.map((item, index) => (
        <Card2 key={index} title={item.title} time={item.time} rating={item.rating} imageUrl={item.imageUrl} />
      ))}
      </div>

      {/* TOP DISHES */}
      <h1 className='text-3xl font-semibold p-8'>Top Dishes</h1>
      <div className="card-container grid grid-cols-1 place-items-center  md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-16 items-center justify-center">
      {TopDishesData.map((item, index) => (
        <Card2 key={index} title={item.title} time={item.time} rating={item.rating} imageUrl={item.imageUrl} />
      ))}
      </div>
    </div>
  )
}

export default SeasonalTop
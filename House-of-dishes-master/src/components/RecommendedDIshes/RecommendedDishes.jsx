
import RecommendedData from '../../Data/RecommendedData'
import Card2 from '../Card2'

const RecommendedDishes = () => {
  return (
    <div className="bg-[#ADD8E6] text-black flex flex-col justify-center items-center py-16">
         <h1 className='text-3xl font-semibold pb-8'>Recommended Dishes</h1>
            <div className="card-container grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-16 items-center justify-center">
            {RecommendedData.map((item, index) => (
        <Card2 key={index} title={item.title} time={item.time} rating={item.rating} imageUrl={item.imageUrl} />
      ))}
    </div>
    </div>
  )
}

export default RecommendedDishes
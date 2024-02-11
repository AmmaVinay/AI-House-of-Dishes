
import KitchenEquipmentCard from '../KitchenEquipmentCard'
import KitchenEquipmentData from '../../Data/KitchenEquipmentData'
const KitchenEquipmentSection = () => {
  return (
    <div className=" text-white flex flex-col justify-center items-center  py-5">
      {/* SEASONAL DISHES */}
      <h1 className='text-3xl font-semibold pb-8'>Kitchen Equipments</h1>
      <div className="card-container grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-16 items-center justify-center">
      {KitchenEquipmentData.map((item, index) => (
        <KitchenEquipmentCard key={index} title={item.title}  image={item.image}  />
      ))}
      </div>

    </div>
  )
}

export default KitchenEquipmentSection
const KitchenEquipments = () => {

    const kitchenEq = [
        {
          title:"Oven ",
        },
        {
          title:"Food Processor"
        },
        {
          title:"Pressure Cooker"
        },
        {
          title:"Air Fryer"
        },
        {
          title:"Blender"
        },
        {
          title:"Microwave"
        }
      ]


  return (
    <div className="  pb-10 -z-10 ">
      <div className="text-2xl font-semibold items-center mt-5">
        Kitchen Equipments
      </div>

      <div>
      <ul className="flex gap-5 mt-5">
          {
            kitchenEq.map((item,index) => {
            return (
              <li key={index} className="bg-slate-800 w-fit p-2 rounded-3xl border"> 
                  <div>{item.title}</div>
              </li>
            )
            })
           } 
          </ul>
      </div>
    </div>
  )
}

export default KitchenEquipments

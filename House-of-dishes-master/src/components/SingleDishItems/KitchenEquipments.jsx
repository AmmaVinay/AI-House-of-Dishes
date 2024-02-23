import React from "react";

const KitchenEquipments = ({ kitchenEquipments }) => {
  return (
    <div className="  pb-10 -z-10">
      <div className="text-2xl font-semibold items-center mt-5">
        Kitchen Equipments
      </div>

      <div>
        <div className="flex flex-wrap gap-5 mt-5">
          {kitchenEquipments.map((item, index) => (
            <div key={index} className="bg-slate-800 text-white w-fit p-2 rounded-3xl border">
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KitchenEquipments;

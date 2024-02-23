import React from "react";

function MainIngradients({mainIngredients}) {
    return <div>
        <div className="text-2xl font-semibold items-center mt-5">
          Main Ingradients
        </div>
        <div className="flex flex-wrap gap-5 mt-5">
          {mainIngredients.map((item, index) => (
            <div key={index} className="bg-slate-800 text-white  w-fit p-2 rounded-3xl border">
              <div>{item.title}</div>
            </div>
          ))}
        </div>

  </div>;
}

export default MainIngradients;

// MasalaDosaCook.js

import React from "react";
import Cooking from "../../../../../pages/Cooking";
import IngredientsSection from "../../../../IngredientsSection/IngredientsSection";
 import { Link } from "react-router-dom";
const IngredientsData = [
  { title: "Whole Wheat Flour", image: "", quantity: "2 cups" },
  { title: "Potatoes", image: "", quantity: "4 medium-sized, boiled and mashed" },
  { title: "Ghee", image: "", quantity: "2 tbsp" },
  { title: "Green Chillies", image: "", quantity: "2, finely chopped" },
  { title: "Ginger", image: "", quantity: "1 inch, grated" },
  { title: "Coriander Leaves", image: "", quantity: "2 tbsp, finely chopped" },
  { title: "Cumin Powder", image: "", quantity: "1 tsp" },
  { title: "Salt", image: "", quantity: "to taste" },
  { title: "Water", image: "", quantity: "as needed" },
];

function AlooParathaCook() {
  const cookingProps = {
    videoSource: "./hls/inshot_20240103_185705791.m3u8",
  };
 
  return (
    <div>
      <Cooking {...cookingProps} />
      <IngredientsSection ingredientsData={IngredientsData} />
      <Link to='/Aloo-Paratha' className="py-12">
        <button className="text-white bg-indigo-600 py-1.5 px-4 rounded-lg font-bold ml-6">Back</button>
      </Link>
    </div>
  );
}

export default AlooParathaCook;

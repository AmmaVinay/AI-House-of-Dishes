// MasalaDosaCook.js

import React from "react";
import Cooking from "../../../../../pages/Cooking";
import IngredientsSection from "../../../../IngredientsSection/IngredientsSection";
 import { Link } from "react-router-dom";
const IngredientsData = [
  { title: "Flattened Rice (Poha)", image: "", quantity: "As needed" },
  { title: "Mustard Seeds", image: "", quantity: "1 tsp" },
  { title: "Curry Leaves", image: "", quantity: "1 sprig" },
  { title: "Turmeric Powder", image: "", quantity: "1/2 tsp" },
  { title: "Onions", image: "path-to-onions-image.jpg", quantity: "1, finely chopped" },
  { title: "Green Chillies", image: "", quantity: "2, finely chopped" },
  { title: "Potatoes", image: "", quantity: "2, boiled and diced" },
  { title: "Peanuts", image: "", quantity: "1/4 cup, roasted" },
  { title: "Coriander Leaves", image: "", quantity: "for garnish" },
  { title: "Lemon Juice", image: "", quantity: "1 tbsp" },
  { title: "Oil", image: "", quantity: "2 tbsp" },
  { title: "Salt", image: "", quantity: "to taste" },
  { title: "Cumin Seeds", image: "", quantity: "1 tsp" },
  { title: "Chopped Tomatoes", image: "", quantity: "1, chopped" },
  { title: "Green Peas", image: "", quantity: "1/2 cup" },
  { title: "Cashews", image: "", quantity: "2 tbsp" },
  // Add any additional ingredients with their images as needed
];

 
function PohaCook() {
  const cookingProps = {
    videoSource: "./hls/inshot_20240103_185705791.m3u8",
  };

  return (
    <div>
      <Cooking {...cookingProps} />
      <IngredientsSection ingredientsData={IngredientsData} />
      <Link to="/Poha" className="py-12">
        <button className="text-white bg-indigo-600 py-1.5 px-4 rounded-lg font-bold ml-6">Back</button>
      </Link>
    </div>
  );
}

export default PohaCook;

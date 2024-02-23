// MasalaDosaCook.js

import React from "react";
import Cooking from "../../../../../pages/Cooking";
import IngredientsSection from "../../../../IngredientsSection/IngredientsSection";
 import { Link } from "react-router-dom";
const IngredientsData = [
  { title: "Dosa Batter", image: "", quantity: "As needed" },
  {
    title: "Potatoes 🥔",
    image: "",
    quantity: "4 medium-sized, boiled and mashed"
  },
  { title: "Onion 🧅", image: "", quantity: "1 large, finely chopped" },
  { title: "Green Chillies 🌶️", image: "", quantity: "2-3, finely chopped" },
  { title: "Mustard Seeds", image: "", quantity: "1 tsp" },
  { title: "Curry Leaves", image: "", quantity: "1 sprig" },
  { title: "Turmeric Powder", image: "", quantity: "1/2 tsp" },
  { title: "Oil", image: "", quantity: "2 tbsp" },
  { title: "Salt 🧂", image: "", quantity: "To taste" }
];

function MasalaDosaCook() {
  const cookingProps = {
    videoSource: "./hls/inshot_20240103_185705791.m3u8",
  };

  return (
    <div>
      <Cooking {...cookingProps} />
      <IngredientsSection ingredientsData={IngredientsData} />
      <Link to="/Masala-Dosa" className="py-12">
        <button className="text-white bg-indigo-600 py-1.5 px-4 rounded-lg font-bold ml-6">Back</button>
      </Link>
    </div>
  );
}

export default MasalaDosaCook;

// IngredientsSection.js

import React from "react";
import IngredientCard from "../IngredientCard";

const IngredientsSection = ({ ingredientsData }) => {
  return (
    <div className="text-black py-12">
      <h1 className="text-3xl font-bold text-center pb-8">Ingredients</h1>
      <div className="card-container flex flex-wrap gap-8">
        {ingredientsData.map((item, index) => (
          <IngredientCard key={index} title={item.title} quantity={item.quantity} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default IngredientsSection;

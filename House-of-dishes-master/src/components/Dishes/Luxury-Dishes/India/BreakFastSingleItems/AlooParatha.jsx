import React, { useState } from "react";
import SingleDish from "../../../../../pages/SingleDish";
import NewMultiSelect from '../../../../../components/SingleDishItems/NewMultiSelect';
import RecommendedDishes from "../../../../RecommendedDIshes/RecommendedDishes";
import KitchenEquipments from '../../../../../components/SingleDishItems/KitchenEquipments';
import NumberOfPeople from '../../../../../components/SingleDishItems/NumberOfPeople';
import MainIngradients from "../../../../SingleDishItems/MainIngradients";
import { Link } from "react-router-dom";
import { IndianBreakFast } from "../../../../../Data/LuxuryDishesData/IndianDishes/IndianBreakFast";
const NutritionValue = [
  { title: "Calories", quantity: "350" },
  { title: "Protein", quantity: "8g" },
  { title: "Carbs", quantity: "50g" },
  { title: "Fats", quantity: "12g" },
  { title: "Fiber", quantity: "5g" },
];

const mainIngredients = [
  { title: "Whole Wheat Flour", quantity: "2 cups" },
  { title: "Potatoes", quantity: "4 medium-sized, boiled and mashed" },
  { title: "Ghee", quantity: "2 tbsp" },
  { title: "Green Chillies", quantity: "2, finely chopped" },
  { title: "Ginger", quantity: "1 inch, grated" },
  { title: "Coriander Leaves", quantity: "2 tbsp, finely chopped" },
  { title: "Cumin Powder", quantity: "1 tsp" },
  { title: "Salt", quantity: "to taste" },
  { title: "Water", quantity: "as needed" },
];

const kitchenEq = [
  { title: "Rolling Pin" },
  { title: "Griddle" },
  { title: "Spatula" },
];

const options = [
  { label: "Whole Wheat Flour", value: "whole_wheat_flour" },
  { label: "Potatoes", value: "potatoes" },
  { label: "Ghee", value: "ghee" },
  { label: "Green Chillies", value: "green_chillies" },
  { label: "Ginger", value: "ginger" },
  { label: "Coriander Leaves", value: "coriander_leaves" },
  { label: "Cumin Powder", value: "cumin_powder" },
  { label: "Salt", value: "salt" },
  { label: "Water", value: "water" },
];

function AlooParatha() {
const [isValue, setValue] = useState([options[0].value]);

const dishProps = {
dishTitle: IndianBreakFast[3].dishName ,
dishImage: IndianBreakFast[3].dishImage,
  dishDescription: "Aloo Paratha: A popular Indian breakfast dish made with whole wheat flour and stuffed with spiced mashed potatoes. It's cooked on a griddle with ghee until golden brown and served hot with yogurt, pickles, or chutney.",
dishAlt: IndianBreakFast[3].dishImage,
dishType: "Vegetarian",
  preprationTime: "30 min",  
  dishIngredients: mainIngredients.length,  // The number of ingredients in the IngredientsData array
  dishCalories: "350  kcal",  
};
 
return (
<div>
    <SingleDish
        dishTitle={dishProps.dishTitle}
        dishImage={dishProps.dishImage}
        dishDescription={dishProps.dishDescription}
        dishAlt={dishProps.dishAlt}
        dishType={dishProps.dishType}
        preprationTime={dishProps.preprationTime}
        dishIngredients={dishProps.dishIngredients}
        dishCalories={dishProps.dishCalories}
    />

    <div className="px-12">
        <MainIngradients mainIngredients={mainIngredients} />
        <NewMultiSelect multiple options={options} isValue={isValue} onChange={(opt)=> setValue(opt)} />
        <KitchenEquipments kitchenEquipments={kitchenEq} />
        <NumberOfPeople />
    </div>

    <div className="flex items-center justify-center my-8">
        <Link to='/Aloo-Paratha-Cook'>
            <button className="p-2 px-4 bg-indigo-600 text-white font-bold rounded-lg" onClick={()=> window.scrollTo(0, 0)}>Start Cooking</button>
        </Link>
    </div>

    <RecommendedDishes />
</div>
);
}

export default AlooParatha;

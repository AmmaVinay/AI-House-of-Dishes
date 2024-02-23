import React, { useState } from "react";
import SingleDish from "../../../../../pages/SingleDish";
import NewMultiSelect from '../../../../../components/SingleDishItems/NewMultiSelect';
import RecommendedDishes from "../../../../RecommendedDIshes/RecommendedDishes";
import KitchenEquipments from '../../../../../components/SingleDishItems/KitchenEquipments';
import NumberOfPeople from '../../../../../components/SingleDishItems/NumberOfPeople';
import MainIngradients from "../../../../SingleDishItems/MainIngradients";
import { Link } from "react-router-dom";
import { IndianBreakFast } from "../../../../../Data/LuxuryDishesData/IndianDishes/IndianBreakFast";
const options = [
  { label: "Coriander Powder", value: "coriander_powder" },
  { label: "Red Chili Powder", value: "red_chili_powder" },
  { label: "Garam Masala", value: "garam_masala" },
  { label: "Chopped Tomatoes", value: "chopped_tomatoes" },
  { label: "Grated Carrots", value: "grated_carrots" },
  { label: "Green Peas", value: "green_peas" },
  { label: "Bell Peppers (Capsicum)", value: "bell_peppers" },
  { label: "Paneer (Indian Cottage Cheese)", value: "paneer" },
  { label: "Cashews", value: "cashews" },
  { label: "Mint Leaves", value: "mint_leaves" },
  { label: "Lemon Juice", value: "lemon_juice" },
  { label: "Turmeric Powder", value: "turmeric_powder" },

];
const NutritionValue = [
  { title: "Calories", quantity: "500" },
  { title: "Protein", quantity: "10g" },
  { title: "Carbs", quantity: "70g" },
  { title: "Fats", quantity: "20g" },
  { title: "Fiber", quantity: "5g" },
];

const mainIngredients = [
  { title: "Dosa Batter" },
  { title: "Potatoes 🥔", quantity: "4 medium-sized, boiled and mashed" },
  { title: "Onion 🧅", quantity: "1 large, finely chopped" },
  { title: "Green Chillies 🌶️", quantity: "2-3, finely chopped" },
  { title: "Mustard Seeds", quantity: "1 tsp" },
  { title: "Curry Leaves", quantity: "1 sprig" },
  { title: "Turmeric Powder", quantity: "1/2 tsp" },
  { title: "Oil", quantity: "2 tbsp" },
  { title: "Salt 🧂", quantity: "to taste" },
  { title: "Masala Dosa", quantity: "1" },
];

const kitchenEq = [
  {title: "Oven"},
  {title: "Food Processor"},
  {title: "Pressure Cooker"},
  {title: "Air Fryer" },
  {title: "Blender"},
  {title: "Microwave"},
  {title: "Dosa Tawa"},
  {title: "Spatula"},
  {title: "Mixing Bowl"},
];

function MasalaDosa() {
const [isValue, setValue] = useState([options[0].value]);

const dishProps = {
dishTitle: IndianBreakFast[0].dishName ,
dishImage: IndianBreakFast[0].dishImage,
dishDescription: "Masala Dosa: A South Indian classic, boasts a thin, crisp rice crepe embracing a spiced potato filling. The blend of mustard seeds, turmeric, and curry leaves infuses every bite with aromatic delight. Boiled and seasoned potatoes add a hearty contrast. Served with coconut chutney and sambar, Masala Dosa is a flavorful journey in just one mouthful.",
dishAlt: IndianBreakFast[0].dishImage,
dishType: "Vegetarian",
preprationTime: "20 min",
dishIngredients: "14",
dishCalories: "500 kcal",
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
        <Link to='/Masala-Dosa-Cook'>
            <button className="p-2 px-4 bg-indigo-600 text-white font-bold rounded-lg" onClick={()=> window.scrollTo(0, 0)}>Start Cooking</button>
        </Link>
    </div>

    <RecommendedDishes />
</div>
);
}

export default MasalaDosa;
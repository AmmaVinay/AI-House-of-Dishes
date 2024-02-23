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
  { label: "Flattened Rice (Poha)", value: "poha" },
  { label: "Mustard Seeds", value: "mustard_seeds" },
  { label: "Curry Leaves", value: "curry_leaves" },
  { label: "Turmeric Powder", value: "turmeric_powder" },
  { label: "Onions", value: "onions" },
  { label: "Green Chillies", value: "green_chillies" },
  { label: "Potatoes", value: "potatoes" },
  { label: "Peanuts", value: "peanuts" },
  { label: "Coriander Leaves", value: "coriander_leaves" },
  { label: "Lemon Juice", value: "lemon_juice" },
  { label: "Oil", value: "oil" },
  { label: "Salt", value: "salt" },
  { label: "Cumin Seeds", value: "cumin_seeds" },
  { label: "Chopped Tomatoes", value: "chopped_tomatoes" },
  { label: "Green Peas", value: "green_peas" },
  { label: "Cashews", value: "cashews" },
];

const NutritionValue = [
  { title: "Calories", quantity: "300" },
  { title: "Protein", quantity: "5g" },
  { title: "Carbs", quantity: "40g" },
  { title: "Fats", quantity: "15g" },
  { title: "Fiber", quantity: "3g" },
];

const mainIngredients = [
  { title: "Flattened Rice (Poha)" },
  { title: "Mustard Seeds", quantity: "1 tsp" },
  { title: "Curry Leaves", quantity: "1 sprig" },
  { title: "Turmeric Powder", quantity: "1/2 tsp" },
  { title: "Onions", quantity: "1, finely chopped" },
  { title: "Green Chillies", quantity: "2, finely chopped" },
  { title: "Potatoes", quantity: "2, boiled and diced" },
  { title: "Peanuts", quantity: "1/4 cup, roasted" },
  { title: "Coriander Leaves", quantity: "for garnish" },
  { title: "Lemon Juice", quantity: "1 tbsp" },
  { title: "Oil", quantity: "2 tbsp" },
  { title: "Salt", quantity: "to taste" },
];

const kitchenEq = [
  { title: "Frying Pan" },
  { title: "Spatula" },
  { title: "Mixing Bowl" },
];

function Poha() {
const [isValue, setValue] = useState([options[0].value]);

const dishProps = {
dishTitle: IndianBreakFast[2].dishName ,
dishImage: IndianBreakFast[2].dishImage,
  dishDescription: "Poha: A popular Indian breakfast dish made with flattened rice, tempered with mustard seeds, curry leaves, and turmeric, and garnished with onions, peas, and coriander leaves. Poha is a light and flavorful dish often enjoyed with a squeeze of lemon.",
dishAlt: IndianBreakFast[2].dishImage,
dishType: "Vegetarian",
  preprationTime: "20 min",  
  dishIngredients: "8",  
  dishCalories: "300 kcal",  
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
        <Link to='/Poha-Cook'>
            <button className="p-2 px-4 bg-indigo-600 text-white font-bold rounded-lg" onClick={()=> window.scrollTo(0, 0)}>Start Cooking</button>
        </Link>
    </div>

    <RecommendedDishes />
</div>
);
}

 export default Poha;

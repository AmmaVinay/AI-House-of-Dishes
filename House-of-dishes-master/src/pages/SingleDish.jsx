/* eslint-disable react-hooks/rules-of-hooks */
import { BsFillStopwatchFill, BsFire } from "react-icons/bs";
import { SiCodechef } from "react-icons/si";
import NewMultiSelect from '../components/SingleDishItems/NewMultiSelect'
import RecommendedDishes from "../components/RecommendedDIshes/RecommendedDishes";
import KitchenEquipments from "../components/SingleDishItems/KitchenEquipments";
import { useState } from "react";
import NumberOfPeople from "../components/SingleDishItems/NumberOfPeople";
import 'plyr/dist/plyr.css';
import { Link } from "react-router-dom";


const NutritionValue = [
{
title: "Calories",
quantity: "350",
},
{
title: "Protein",
quantity: "20g",
},
{
title: "Carbs",
quantity: "60g",
},
{
title: "Fats",
quantity: "20g",
},
{
title: "Fiber",
quantity: "10g",
},
];

const mainIngradients = [
{
title:"Panner 🧀",
},
{
title:"Tomatoes 🍅"
},
{
title:"Red Chill Powder 🌶️"
},
{
title:"Salt 🧂"
},
{
title:"Onion 🧅"
}
]

const options = [
{ label: "Cinnamon stick", value: 1 },
{ label: "Dry red chill ", value: 2 },
{ label: "Red Chill Powder ", value: 3 },
{ label: "Ginger garlic paste", value: 4 },
{ label: "Cilantro", value: 5 },
];

const SingleDish = () => {

const [isValue,setValue] = useState([options[0].value]);
console.log(isValue)

return (
<>
    <div className="h-full w-screen  pt-5 bg-white text-black">
        {/* single dish image and title,nutrition value */}
        <div className="px-12 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full sm:w-8/12 md:w-7/12 ">
                <img src="https://www.whiskaffair.com/wp-content/uploads/2020/08/Dhaba-Style-Paneer-Masala-2-3.jpg" alt="dish image" className="rounded-lg w-full object-cover" />
            </div>

            <div className="flex flex-col w-full md:5/12">
                <div className="text-4xl md:text-4xl font-bold my-3">Paneer Masala</div>
                <div className="bg-green-500 text-white rounded-full w-fit py-1 px-2 mb-8">
                    Vegetarian
                </div>

                {/* Dish Information */}
                <div className="flex flex-col justify-between  ">
                    <div className="flex items-center   justify-around text-white space-y-4 md:space-y-0 md:space-x-4 bg-slate-700 py-2 rounded-2xl">
                        {/* Time */}
                        <div className="flex flex-col items-center md:flex-row gap-3">
                            <BsFillStopwatchFill className="text-4xl md:mt-2" />
                            <div className="font-semibold text-sm md:text-base">
                                <p className="text-xs md:text-sm">Time</p>
                                <p className="text-xs md:text-sm">60min</p>
                            </div>
                        </div>

                        {/* Ingredients */}
                        <div className="flex flex-col items-center md:flex-row gap-3">
                            <SiCodechef className="text-4xl md:mt-2" />
                            <div className="font-semibold text-sm md:text-base">
                                <p className="text-xs md:text-sm">Ingredients</p>
                                <p className="text-xs md:text-sm">20</p>
                            </div>
                        </div>

                        {/* Calories */}
                        <div className="flex flex-col items-center md:flex-row gap-3">
                            <BsFire className="text-4xl md:mt-2" />
                            <div className="font-semibold text-sm md:text-base">
                                <p className="text-xs md:text-sm">Calories</p>
                                <p className="text-xs md:text-sm">500kcal</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h1 className="text-2xl font-bold pt-5">About the Dish</h1>
                        <p className="text-base md:text-lg text-justify ">
                            Paneer Butter Masala is a rich and creamy North Indian Dish, featuring succulent chunks of paneer (Indian Cottage Cheese) cooked in a luscious tomato-based gravy, enriched with butter and aromatic spices. Its indulgent flavors and velvety texture make it a beloved vegetarian delicacy.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Main Ingradients section */}

        <div className="px-12">
            <div className="text-2xl font-semibold items-center mt-5">
                Main Ingradients
            </div>
            <ul className="flex flex-wrap gap-5 mt-5">
                {
                mainIngradients.map((item,index) => {
                return (
                <li key={index} className="bg-slate-800 text-white  w-fit p-2 rounded-3xl border">
                    <div>{item.title}</div>
                </li>
                )
                })
                }
            </ul>


            <div className="text-2xl font-semibold mt-5">
                Customize Ingradients
            </div>

            <div className="">
                <NewMultiSelect multiple options={options} isValue={isValue} onChange={(opt)=>setValue(opt)} />
            </div>
            <KitchenEquipments />
            <NumberOfPeople />

        </div>
        <div className="flex items-center justify-center my-8">
            <Link to='/cooking'>
            <button className="p-2 px-4 bg-indigo-600 text-white font-bold rounded-lg" onClick={()=> window.scrollTo(0, 0)}>Start Cooking</button>
            </Link>
        </div>

        <RecommendedDishes />

    </div>
</>
);
};
export default SingleDish;
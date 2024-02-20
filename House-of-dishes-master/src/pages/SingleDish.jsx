/* eslint-disable react-hooks/rules-of-hooks */
import { BsFillStopwatchFill, BsFire } from "react-icons/bs";
import { SiCodechef } from "react-icons/si";
import NewMultiSelect from '../components/SingleDishItems/NewMultiSelect'
import RecommendedDishes from "../components/RecommendedDIshes/RecommendedDishes";
import KitchenEquipments from "../components/SingleDishItems/KitchenEquipments";
import { useState } from "react";
import NumberOfPeople from "../components/SingleDishItems/NumberOfPeople";
import { useNavigate } from "react-router-dom";
import 'plyr/dist/plyr.css';


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
const navigate = useNavigate()

const [isValue,setValue] = useState([options[0].value]);
console.log(isValue)


const navigateHandler = () =>{
navigate('/cooking')
}

return (
<>
    <div className="h-full w-screen container-lg pt-5 bg-[#0B1018] text-white">
        {/* single dish image and title,nutrition value */}
        <div className="flex flex-col md:flex-row items-center justify-center  space-x-8">
            <div className=" w-full md:w-1/3">
                <img src="https://www.whiskaffair.com/wp-content/uploads/2020/08/Dhaba-Style-Paneer-Masala-2-3.jpg" alt="dish image" className="rounded-lg w-full object-cover" />
            </div>
            <div className="flex flex-col w-full md:w-1/2 ">
                {/* dish title and type veg or non veg */}
                <div className="text-6xl font-bold my-3">Panner Masala</div>
                <div className="bg-slate-700 rounded-full w-fit py-1 px-2 mb-8 f">
                    Vegetarian
                </div>

                {/* dish description */}
                <div className="flex justify-around text-xl bg-slate-600 py-2 rounded-2xl">
                    <div className="flex gap-3">
                        <div>
                            <BsFillStopwatchFill className="text-4xl mt-2" />
                        </div>
                        <div className="font-semibold">
                            <p>Time</p>
                            <p>60min</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div>
                            <SiCodechef className="text-4xl mt-2" />
                        </div>
                        <div className="font-semibold">
                            <p>Ingradients</p>
                            <p>20</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div>
                            <BsFire className="text-4xl mt-2" />
                        </div>
                        <div className="font-semibold">
                            <p>Calories</p>
                            <p>500kcal</p>
                        </div>
                    </div>
                </div>


                {/* nutrition description */}
                
                <div>
                    <h1 className="text-2xl font-bold pt-5">About the Dish</h1>
                    <p className="text-lg md:text-xl">
                        Paneer Butter Masala is a rich and creamy North Indian Dish, featuring succelent chunks of paneer (Indian Cottage Cheese) cooked in a luscious tomato-based gravy, enriched wiht butter and aromatic spices. its indulgent flavours and velvety texture make it a beloved vegetarian delicacy.
                    </p>
                </div>
            </div>
        </div>

        {/* Main Ingradients section */}

        <div className=" translate-x-[10%]">
            <div className="text-2xl font-semibold items-center mt-5">
                Main Ingradients
            </div>
            <ul className="flex flex-wrap gap-5 mt-5">
                {
                mainIngradients.map((item,index) => {
                return (
                <li key={index} className="bg-slate-800  w-fit p-2 rounded-3xl border">
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
            <button className="p-2 px-4 bg-indigo-600 text-white font-bold rounded-lg" onClick={navigateHandler}>Start Cooking</button>
        </div>

        <RecommendedDishes />

    </div>
</>
);
};
export default SingleDish;
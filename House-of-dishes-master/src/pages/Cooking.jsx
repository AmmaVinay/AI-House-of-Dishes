import { useNavigate } from "react-router-dom"
import IngredientsSection from "../components/IngredientsSection/IngredientsSection"

const Cooking = () => {
   const navigate = useNavigate();

   const handleNavigate = () => {
    navigate('/singledish')
   }
  return (
    <div className="h-full w-screen bg-[#0B1018] ">
      <div className="text-center text-white text-4xl font-bold">
        Welcome to AI Chef Kitchen
      </div>
      <div>
        <button
        onClick={handleNavigate}
        className="text-white bg-indigo-600 py-1.5 px-4 rounded-lg font-bold ml-6">Back</button>
      </div>
      <div className="flex items-center justify-center my-10">
      <div className="h-96 w-[35rem] bg-slate-500 ">
       {/* It will be reserved as graphics for cooking instructions */}
        </div>
      </div>
     <div>
      
     <IngredientsSection/>
     </div>
      
      
    </div>
  )
}

export default Cooking

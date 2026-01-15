import { imageGridCards } from '../../../utils/FoodData';
import FoodCard from "./FoodCard";

export default function  FoodOption()
{
    return(
        <div className="max-w-[80%] mx-auto mt-20">
            <p className="text-3xl font-bold">Order our best food options</p>
           <div className="flex overflow-x-auto overflow-y-hidden scrollbar-thin">
            {
                imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData = {foodData}></FoodCard>)
            }
           </div>
        </div>
    )
}


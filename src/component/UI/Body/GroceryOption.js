import { GrocerGridCard } from '../../../utils/GroceryData'
import GroceryCard from "./GroceryCard"

export default function GroceryOption()
{
    return(
        <div className="mt-20 w-[80%] mx-auto">
           
                <h1 className="text-3xl font-bold">Shop Groceries on Instamart</h1>
                <div className="w-full flex flex-nowrap overflow-x-auto mt-20 gap-3">
                   {
                     GrocerGridCard.map((foodData)=><GroceryCard key={foodData.id} foodData = {foodData}></GroceryCard>)
                   }
                </div>
          
        
        </div>
    )
}
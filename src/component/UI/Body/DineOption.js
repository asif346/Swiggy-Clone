import { dineoutRestaurnat } from "../../../utils/DineData"
import DineCard from "./DineCard"
export default function DineOption()

{
    return(
        <div className="w-[80%] mx-auto mt-20">
            <p className="text-3xl font-bold">Discover best restaurants on Dineout</p>
            <div className=" w-full flex flex-nowrap overflow-x-auto mx-auto mb-20 mt-5 gap-5 scrollbar-hide ">
                {
                    dineoutRestaurnat.map((restaurantData)=><DineCard key={restaurantData?.info?.id} restaurantData = {restaurantData}></DineCard>)
                }

            </div>
        </div>
    )
}
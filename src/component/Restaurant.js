import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmmer from "./Shimmer";
import { imageGridCards } from '../utils/FoodData';
import FoodCard from "./UI/Body/FoodCard";

export default function Restaurant(){
   
        
    const [RestData, setRestData] = useState([])

    useEffect(()=>{
    
     async function fetchData() {
        
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
     }

     fetchData();
    },[])

        if(RestData.length == 0)
           return <Shimmmer></Shimmmer>




     return (

            <>
           
                <div className="max-w-[80%] mx-auto mt-20 ">
                    <p className="text-3xl font-bold">What's on your mind?</p>
                   <div className="flex overflow-x-auto scrollbar-thin">
                    {
                        imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData = {foodData}></FoodCard>)
                    }
                   </div>
                </div>

                <div className="flex flex-wrap max-w-[80%] mx-auto mt-20  gap-2">
                    
                    {
                        RestData.map((restInfo)=><RestCard key={restInfo?.info?.id} restInfo={restInfo}></RestCard>)
                    }
        
                </div>
            </>
        )

}
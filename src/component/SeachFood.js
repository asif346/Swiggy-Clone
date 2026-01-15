import { useState,useEffect } from "react";
import { useParams } from "react-router" 

export default function SearchFood()
{
    const {id} = useParams();
    const [food, setfood] = useState("");
    const [RestData, setRestData] = useState([]);


      useEffect(() => {
        async function fetchData() {
          try {
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
    
            const response = await fetch(proxyServer + swiggyAPI);
            const data = await response.json();
            console.log(data);
    
            // const tempData =data?.data?.cards.find(
            //     (card) => card?.groupedCard?.cardGroupMap?.REGULAR
            //   )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    
            // const filterData = tempData.filter(
            //   (items) => "title" in (items?.card?.card || {})
            // );
    
            setRestData(data);
          } catch (error) {
            console.error("Failed to fetch menu:", error);
          }
        }
        if(food.length>1)
        {
          fetchData();
        }
        
      }, [food]);



    return(

        <div className="w-[80%] mx-auto mt-20 mb-20">
            <input className="w-full pl-10 py-4 bg-gray-200" placeholder="Seach here" onChange={(e)=>setfood(e.target.value)}></input>
        </div>
    
    )
}
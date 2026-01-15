import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import MenuCard from "./MenuCard";

export default function RestaurantMenu() {
  let { id } = useParams();
  const [Select, setSelect] = useState(null);
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const proxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

        const response = await fetch(proxyServer + swiggyAPI);
        const data = await response.json();

        const tempData =
          data?.data?.cards.find(
            (card) => card?.groupedCard?.cardGroupMap?.REGULAR
          )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

        const filterData = tempData.filter(
          (items) => "title" in (items?.card?.card || {})
        );

        setRestData(filterData);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      }
    }

    fetchData();
  }, [id]);

  return (

    <div>
      
        <div className="w-[80%] mx-auto mt-20 mb-20">
          <Link to={`/city/delhi/${id}/search`}>
            <p className="w-full text-center py-5 bg-gray-200 text-2xl rounded-2xl">Search for Dishes</p>

          </Link>
        </div>

      <div className="w-[80%] mx-auto mt-20 mb-20">
        <button className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${Select === 'veg'? 'bg-green-500' : 'bg-gray-200'}` } onClick={()=>setSelect('veg')}>veg</button>
        <button className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${Select === 'non-veg'? 'bg-red-500' : 'bg-gray-200'}` } onClick={()=>setSelect('non-veg')}>non-veg</button>
      </div>

      <div className="w-[80%] mx-auto mt-20">
        {RestData.map((menuItems) => (<MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelect={Select}/>))}
      </div>
    </div>    

  );
}



// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9202266&lng=81.1795848&restaurantId=355485&submitAction=ENTER

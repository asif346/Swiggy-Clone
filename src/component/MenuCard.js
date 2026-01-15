import { useState } from "react";


import RestInfo from "./RestInfo";

export default function MenuCard({ menuItems, foodSelect }) {

const [IsOpen, setIsOpen] = useState(true);



  // If menuItems has sub-categories
  if (menuItems?.categories) {
    return (

      <div className="w-full">
        <p className="text-2xl font-bold">{menuItems.title}</p>
        <div>
          {menuItems?.categories?.map((category) => (
            <MenuCard key={category?.title} menuItems={category} foodSelect={foodSelect}/>
          ))}
        </div>
      </div>
    );
  }

   if(!IsOpen){
      return(
        <div className="w-full">
          <div className="flex justify-between w-full">
            <p className="text-2xl font-bold ">{menuItems.title}</p>
            <button className="text-2xl font-semibold mr-10" onClick={()=>setIsOpen(!IsOpen)}>{IsOpen?'⌃':'˅'}</button>
          </div>

          <div className="h-5 bg-[rgba(2,6,12,0.05)] mt-2 mb-2"></div>

        </div>
      )
   }

   if(foodSelect === 'veg')
   {
        return(
        <div className="w-full">
          <div className="flex justify-between w-full">
            <p className="text-2xl font-bold ">{menuItems.title}</p>
            <button className="text-2xl font-semibold mr-10" onClick={()=>setIsOpen(!IsOpen)}>{IsOpen?'⌃':'˅'}</button>
          </div>

          <div>
            {
              menuItems?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((food)=><RestInfo key={food?.card?.info?.id} restData={food?.card?.info}/>)
            }
          </div>
          <div className="h-5 bg-[rgba(2,6,12,0.05)] mt-2 mb-2"></div>

        </div>
      )
   }

   if(foodSelect==='non-veg')
   {
    return(
        <div className="w-full">
          <div className="flex justify-between w-full">
            <p className="text-2xl font-bold ">{menuItems.title}</p>
            <button className="text-2xl font-semibold mr-10" onClick={()=>setIsOpen(!IsOpen)}>{IsOpen?'⌃':'˅'}</button>
          </div>

          <div>
            {
              menuItems?.itemCards?.filter((food)=> !("isVeg" in food?.card?.info)).map((food)=><RestInfo key={food?.card?.info?.id} restData={food?.card?.info}/>)
            }
          </div>
          <div className="h-5 bg-[rgba(2,6,12,0.05)] mt-2 mb-2"></div>

        </div>
      )
   }



  // If menuItems has direct menu items
  if (menuItems?.itemCards) {
    return (   

            <div className="w-full">
              
              {/* <p className="text-2xl font-bold">{menuItems.title}</p> */}

              <div className="flex justify-between w-full">
                <p className="text-2xl font-bold ">{menuItems.title}</p>
                <button className="text-2xl font-semibold mr-10" onClick={()=>setIsOpen(!IsOpen)}>{IsOpen?'⌃':'˅'}</button>
              </div>

              <div>
                {menuItems.itemCards.map((item) => (<RestInfo key={item?.card?.info?.id} restData={item?.card?.info} />))}
              </div>

              {/* <div className="h-5 bg-[rgba(2,6,12,0.05)] mt-2 mb-2"></div> */}

            </div>

      
    );
  }

  // Fallback in case menuItems is empty
  return null;
}


export default function GroceryCard({foodData})
{ 
    const groceryimage = foodData?.imageId;
    return(
        <div className="w-48 flex-none">
              <div className="relative">
                    <a href={foodData?.action?.link}>
                        {groceryimage && (<img className="w-40 h-48 object-cover rounded-lg" src={`https://media-assets.swiggy.com/swiggy/image/upload/${groceryimage}`}/>)}
                    </a>
                    <h1 className="pt-3 text-xl text-center font-bold">{foodData?.action?.text}</h1>
              </div>
                
            
        </div>
    )
}
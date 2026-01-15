
 export default function DineCard({restaurantData})
{
      const imageUrl = restaurantData?.info?.mediaFiles[0]?.url;
    return(
        
        <div className="max-w-sm flex-none">
            <a href={restaurantData?.cta?.link} target="blank">
                <div className="relative">

                    {imageUrl && (<img className="w-80 h-48 object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageUrl}`} alt="Restaurant"/>)}
                    
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>

                    <p className="absolute bottom-2 left-2 text-xl text-white">{restaurantData?.info?.name}</p>
    
                    <p className="absolute bottom-2 right-2 text-xl text-white">{restaurantData?.info?.rating?.value}</p>
                    
                </div>
            </a>
        </div>
    )
}





export default function FoodCard({foodData})
{
    const image = foodData?.imageId;
    return(
        <>
            <div className="w-44 h-45  flex-none">
                <a href={foodData?.action?.link}>
                    {image && (<img src={`https://media-assets.swiggy.com/swiggy/image/upload/${image}`}/>)}
                </a>
            </div>
       
        </>
    )
}
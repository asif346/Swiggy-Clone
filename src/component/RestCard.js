import { Link } from "react-router"


export default function RestCard({restInfo})
{
    return(
        <Link to={"/city/delhi/"+restInfo?.info?.id}>
        <div className="max-w-[280px] mb-2 transform transition duration-200 hover:scale-95">
            <img className="w-71 h-47 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}></img>
            <div className="w-[95%] mx-auto mt-3">
                  <div className="font-bold text-xl">{restInfo?.info?.name}</div>
                <div className="flex items-center gap-2">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.196-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"
                                clipRule="evenodd"/>
                        </svg>
                    <span className="text-lg">{restInfo?.info?.avgRating}</span>
                    <span className=" font-bold text-lg">{restInfo?.info?.sla?.slaString}</span>
                </div>
                <div className="text-gray-600 text-xl mt-1 h-7 overflow-hidden">{restInfo?.info?.cuisines.join(" ")}</div>
            </div>
        
        </div>
        </Link>
    )
}

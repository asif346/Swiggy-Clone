import { Link } from "react-router"


export default function Header()
{
    return(
        <header className="bg-[#FF5200] font-serif">
              {/* swiggy logo */}  
            <div className="flex justify-between container mx-auto py-8 px-32">
                <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"/>
                 {/* nevigation bar */}
                <div className=" text-white font-bold flex gap-8 items-center">
                    <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
                    <a href="https://partner.swiggy.com/login#/swiggy" target="_blank">Partner with us</a>
                    <a className="border border-white py-4 px-10 rounded-2xl" href="https://www.swiggy.com/corporate/" target="_blank">get the App</a>
                    <a className="border border-black bg-black py-4 px-10 rounded-2xl" href="https://www.swiggy.com/corporate/" target="_blank">sign in</a>
                </div>
            </div>

            {/* side image */}
            <div className="pt-16 pb-8 relative">
                 <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                 <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className=" max-w-[70%] text-5xl text-white font-bold container mx-auto text-center">
                    Order Food and groceries.Discover best Restaurant.Swiggy it!
                </div>
                {/* search bar */}
                <div className="max-w-[65%] container mx-auto flex gap-5 mt-8 ">
                    <input className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl z-1" placeholder="Delhi, India"></input>
                    <input className="bg-white w-[55%] text-xl px-6 py-4 rounded-2xl" placeholder="Search for restaurant, item or more"></input>
                </div>
            </div>    
             {/* image card */}
            <div className="max-w-[80%] flex container mx-auto items-center">
                <Link to="/restaurant">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"/>
                </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"/>
                </a>
                <a href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"/>
                </a>

            </div>
        </header>
    )
}



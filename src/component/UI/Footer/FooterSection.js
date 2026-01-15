import { groceries } from '../../../utils/groceries';

export default function Footer()
{
    return(
    
        <footer className="bg-white text-gray-700">
           
            <div>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"/>
            </div>
            <div className="w-[80%] mx-auto  mt-20 ">
                <h2 className=" font-bold text-2xl">Cities with Food Delivery</h2>
            </div>
            <div className="w-[80%] mx-auto flex flex-wrap gap-4 py-12">
                {
                    groceries.map((item,index)=>
                        <div key={`${item.link}-${index}`} className="border-1 border-gray-500 rounded-xl w-50  text-center py-4 my-2 px-3">
                            <a href={item.link}><h3>{item.text}</h3></a>
                        </div>
                    )
                }
            </div>


            {/* Footer Bottom */}
            <div className="bg-[#F0F0F5] px-6 md:px-20 py-12">
                <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-10">

                    {/* Logo and Copyright */}
                    <div>
                        <img
                        src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
                        alt="Swiggy Logo"
                        className="w-40 h-12 mb-3 "
                        />
                        <p className="text-xl text-gray-400 ">© 2025 Swiggy Limited</p>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-3">Company</h3>
                        <ul className="space-y-2 text-gray-500">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Swiggy One</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="font-semibold mb-3">Contact Us</h3>
                        <ul className="space-y-2 text-gray-500">
                        <li><a href="#">Help & Support</a></li>
                        <li><a href="#">Partner with us</a></li>
                        <li><a href="#">Ride with us</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold mb-3">Legal</h3>
                        <ul className="space-y-2 text-gray-500">
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Refund & Cancellation</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        </ul>
                    </div>


                </div>
                
            </div>



        </footer>
    )
}
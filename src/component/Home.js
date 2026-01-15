import Header from "./UI/Header/Header";
import DineOption from "./UI/Body/DineOption";
import FoodOption from "./UI/Body/FoodOption";
import GroceryOption from "./UI/Body/GroceryOption";
import Footer from "./UI/Footer/FooterSection"



export default function Home()
{
    return(
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOption></GroceryOption>
        <DineOption></DineOption>
        <Footer></Footer>
       
        </>
    )
}
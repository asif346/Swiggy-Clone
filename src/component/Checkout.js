import { useSelector } from "react-redux";


export default function Checkout(){
    const items = useSelector(state=>state.cart.items);

    return(
        <>
        {
            items.map((value, index)=> <div key={`${value.id}-${index}`} className="text-4xl">{value.name}</div>)
        }
        </>
    )
}
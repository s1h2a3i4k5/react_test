import { useDispatch, useSelector } from "react-redux"
import Listitems from "./Listitems";
import {clearItems} from "../utilises/cartSlice"
const Card = () =>{
    const cardItems = useSelector((store) => store.cart.items);
    console.log(cardItems)

    //to clear the items in card
    const dispatch = useDispatch()
    const handleclearitem = () =>{
        dispatch(clearItems())
    }
return(
 <div>
    <h1>Welcome to cart items</h1>
    {cardItems == 0 && <h2>Please do the shopping</h2>}
    
    <Listitems data = {cardItems}/>
    <button className="btn btn-info" onClick={handleclearitem}>Remove items</button>
 </div>
)
};
export default Card;
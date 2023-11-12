import { useDispatch } from "react-redux";
import {addItems} from "../utilises/cartSlice";
import { RESTRO_PROD_URL } from "../utilises/constant";



const Listitems = ({ data }) => {
    const dispatch = useDispatch();
    const handleclickitems = (items) =>{
       dispatch(addItems(items))
    }
    return (
        <div className="container">
            {data.map((item) =>
                <div className="row  mt-5">
                    <div className="col">

                        <p >{item.card.info.name}-{item.card.info.price}</p>
                        <p>{item.card.info.description}</p>
                    </div>
                    <div className="col">
                        <img className="" src={RESTRO_PROD_URL + item.card.info.imageId} height={100} />
                        <p><button className="border border-none text-center py-2 px-3" style={{color:"green"}} onClick={() => handleclickitems(item)}>Add</button></p>
                        {/* <p><button className="border border-none text-center py-2 px-3" style={{color:"green"}}><button className="border border-none">+</button>Add <button className="border border-none">-</button></button></p> */}

                    </div>
                    <hr className="my-3" />
                </div>




            )}
        </div>








    )
}
export default Listitems;
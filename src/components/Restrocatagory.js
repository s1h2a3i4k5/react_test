import { useState } from "react";
import Listitems from "./Listitems";

const Restrocatagory = ({ data }) => {
    //const { data } = props;
    const [Setitems, updateSetitems] = useState(false)

    const Clicksetitems = () => {
        updateSetitems(!Setitems);  /** to hide and display the menu */
    }
    return (
        <div className=" mb-3 offset-lg-0 offset-md-2" >
            <div onClick={Clicksetitems}>
                <span className="bg-light d-block m-2 text-black fw-"><strong>{data.title}-({data.itemCards.length})</strong></span>

                    </div>

                <div>
                    {Setitems && <Listitems data={data.itemCards} />}
                </div>
            
        </div>
        
         // <div>
        //     <h2 onClick={Clicksetitems}> 
        //     <span className="bg-light d-block m-2 text-black fw-"><strong>{data.title}-({data.itemCards.length})</strong></span>
        //     </h2>
        //     <h3>
        //     {Setitems && <Listitems data={data.itemCards} />}
        //     </h3>
        // </div>

       
    )
}
export default Restrocatagory;

import { RESTRO_PROD_URL } from "../utilises/constant";


const RestoComponent = (props) => {
    const { restroData } = props;// inside the object {} getting without restrodata
    console.log(restroData);

    return (
        <div className="resto">
            <div className="card">

                <img src={RESTRO_PROD_URL + restroData.cloudinaryImageId} height="200px" />
                {/* <img src = {RESTRO_PROD_URL+props.restroData_image} height="200px" />//second method  */}
                <div className="card-body">

                    <h2>{restroData.name}</h2>
                    <p>{restroData.avgRating}<i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
                    <p>{restroData.areaName}</p>
                    <p>{restroData.cuisines.join(",")}</p>

                    
                    {/* <------------------------------Second method of map props-----------------------------> */}
                    {/* <h2>{props.restroData_name}</h2>
                    <p>{props.restroData_avg}<i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
                    <p>{props.restroData_areaName}</p> 
                    <p>{props.restroData_cuisin.join(",")}</p> */}
                </div>
            </div>

        </div>

    )
}
export default RestoComponent;
import RestoComponent from "./Restro";
import BestoffersComponent from "./Bestoffers";
import { useEffect, useState } from "react";
// import restorent_Data from "../utilises/mockdata";
// import bestoffer_Data from "../utilises/mockdata";


const bestoffer_Data = [
    {
        id: "34777489",
        name: "Tiffins",
        cloudinaryImageId: "3967580c0329555334072b18ba3c889c",
        locality: "Manikonda",
        areaName: "Narsingi",
        costForTwo: "₹150 for two",
        cuisines: ["South Indian", "North Indian", "Thandoori"],
        avgRating: 4.5,
        veg: true,
    },
    {
        id: "3477748978",
        name: "Tiffins",
        cloudinaryImageId: "8759cb1007417b7df753a2960300cb02",
        locality: "Manikonda",
        areaName: "Narsingi",
        costForTwo: "₹150 for two",
        cuisines: ["South Indian", "North Indian", "Thandoori"],
        avgRating: 4.5,
        veg: true,
    },
    {
        id: "3477748911",
        name: "Tiffins",
        cloudinaryImageId: "b7a607f336f0815cd1056262006bb257",
        locality: "Manikonda",
        areaName: "Narsingi",
        costForTwo: "₹150 for two",
        cuisines: ["South Indian", "North Indian", "Thandoori"],
        avgRating: 4.5,
        veg: true,
    }
]


const Bodycomponent = () => {

    const [restorent_Data, filteredrestrant] = useState([]);

    useEffect ( ()  => {
    fetch_data()
    },[])

    const fetch_data = async() =>{
        const res_data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const original_data = await res_data.json();
        // console.log(original_data)
        const api_data = original_data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        filteredrestrant(api_data)
        // console.log(filteredrestrant)
    }
    if(restorent_Data == 0)
    {
        return "page loading";
    }

    
    return (
        <div className="container body mt-5">
            <div className="row">
                <h2 className="m-3">Best offers for you</h2>
                <div className="col-lg-4">
                    <BestoffersComponent
                        bestofferData={bestoffer_Data[0]}
                    />
                </div>
                <div className="col-lg-4">
                    <BestoffersComponent
                        bestofferData={bestoffer_Data[1]}
                    />
                </div>
                <div className="col-lg-4">
                    <BestoffersComponent
                        bestofferData={bestoffer_Data[2]}
                    />
                </div>
            </div>

            {/* <----------------------Filter method for Button---------------> */}
            <div className="row">
                <div className=" col-lg-4 m-4">
                    <button className="top_restro" onClick={() => {
                        let restro_filter = restorent_Data.filter((toprestrant) => (toprestrant.info.avgRating > 4.4))
                        filteredrestrant(restro_filter)
                        //console.log(restro_filter)
                        // console.log("Button clicked")
                    }}>Top Rated Restaurants</button>
                </div>
            </div>




            {/* <---------------------------Restaurants near me----------------------> */}
            <div className="row d-flex">

                <h2>Restaurants With Great Offers Near Me</h2>
                <div className="col-lg-4 p-3 ">

                    {restorent_Data.map((restrant) =>  (<RestoComponent restroData={restrant} />))
                    };

                     {/* {restorent_Data.map((restrant) => {return <RestoComponent restroData={restrant} />})
                    };  */}

                    {/* {restorent_Data.map((restrant) => (<RestoComponent
                        restroData_image={restrant.info.cloudinaryImageId}
                        restroData_name={restrant.info.name}
                        restroData_avg={restrant.info.avgRating}
                        restroData_areaName={restrant.info.areaName}
                        restroData_cuisin={restrant.info.cuisines}

                    />))
                    };  */}
                </div>

            </div>

        </div>


    )
}
export default Bodycomponent;
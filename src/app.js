import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/Header.js";
import FooterComponent from "./components/Footer.js";
import Bodycomponent from "./components/Body.js";

// const HeaderComponent = () => {
//     return (
//         <nav className="navbar  navbar-expand-sm sticky-top">
//             <div class="container-fluid">
//                 <a href="#" className="navbar-brand"><img className="rounded-circle" src="https://img.freepik.com/free-vector/logo-organic-restaurant_1071-147.jpg?w=100&t=st=1692442748~exp=1692443348~hmac=07ad6b8ba43070179a1aa02273124b8b957ca59a635ccb1be9c9f86427050612" alt="" height="60px" /></a>
//                 <p className="m-2">Others</p>
//                 <p className="m-2">Select the location<i class="fa-sharp fa-solid fa-location-dot"></i></p>
//                 <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mynav">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="mynav">
//                     <ul className="navbar-nav ms-auto">
//                         <li className="nav-item"><a href="#" className="nav-link"><input type="Search" className="search" /><i className="fa-solid fa-magnifying-glass" ></i>Search</a></li>
//                         <li className="nav-item"><a href="#" className="nav-link"><i className="fa-solid fa-check"></i>Offers</a></li>
//                         <li className="nav-item"><a href="#" className="nav-link"><i className="fa-solid fa-circle-info"></i>Help</a></li>
//                         <li className="nav-item"><a href="#" className="nav-link"><i className="fa-solid fa-user"></i>Sign in</a></li>
//                         <li className="nav-item"><a href="#" className="nav-link"><i className="fa-brands fa-cc-amazon-pay"></i>Card</a></li>

//                     </ul>

//                 </div>

//             </div>
//         </nav>

//     )
// };
// const restorent_Data = [

//     {
//         id: "347774",
//         name: "Varalakshmi Tiffins",
//         cloudinaryImageId: "8523266de1213e8ea57e5df4eedf747e",
//         locality: "Manikonda",
//         areaName: "Narsingi",
//         costForTwo: "₹150 for two",
//         cuisines: ["South Indian", "North Indian", "Thandoori"],
//         avgRating: 4.5,
//         veg: true,
//     },
//     {
//         id: "3477274",
//         name: "Udipi's upgaar",
//         cloudinaryImageId: "nqgrpd6e8vliz57mxlvu ",
//         locality: "GAchibowlli",
//         areaName: "Narsingi",
//         costForTwo: "₹550 for two",
//         cuisines: ["South Indian", "North Indian"],
//         avgRating: 4.5,
//         veg: true,
//     },
//     {
//         id: "3477741",
//         name: "ChaiPoint",
//         cloudinaryImageId: "p4znxkstyrdobxwl6rxa ",
//         locality: "Ameerpet",
//         areaName: "Narsingi",
//         costForTwo: "₹50 for two",
//         cuisines: ["South Indian", "North Indian"],
//         avgRating: 3.5,
//         veg: true,
//     },
//     {
//         id: "3477746",
//         name: "Eat Fit",
//         cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74 ",
//         locality: "Kukatpalli",
//         areaName: "Narsingi",
//         costForTwo: "₹560 for two",
//         cuisines: ["South Indian", "North Indian"],
//         avgRating: 2.5,
//         veg: true,
//     },
//     {
//         id: "3477747",
//         name: "SubWay",
//         cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b ",
//         locality: "Kukatpalli",
//         areaName: "Narsingi",
//         costForTwo: "₹560 for two",
//         cuisines: ["South Indian", "North Indian"],
//         avgRating: 5.5,
//         veg: true,
//     },
//     {
//         id: "3477749",
//         name: "ChaiPoint",
//         cloudinaryImageId: "p4znxkstyrdobxwl6rxa ",
//         locality: "Ameerpet",
//         areaName: "Narsingi",
//         costForTwo: "₹50 for two",
//         cuisines: ["South Indian", "North Indian"],
//         avgRating: 3.5,
//         veg: true,
//     }
// ];




// const RestoComponent = (props) => {
//     const { restroData } = props;// inside the object {} getting without restrodata
//     console.log(restroData);

//     return (
//         <div className="resto">
//             <div className="card">

//                 <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restroData.cloudinaryImageId} height="200px" />
//                 <div className="card-body">
//                     <h2>{restroData.name}</h2>
//                     <p>{restroData.avgRating}<i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
//                     <p>{restroData.areaName}</p>
//                     <p>{restroData.cuisines.join(",")}</p>
//                 </div>
//             </div>

//         </div>

//     )
// };

// const bestoffer_Data = [
//     {
//         id: "34777489",
//         name: "Tiffins",
//         cloudinaryImageId: "3967580c0329555334072b18ba3c889c",
//         locality: "Manikonda",
//         areaName: "Narsingi",
//         costForTwo: "₹150 for two",
//         cuisines: ["South Indian", "North Indian", "Thandoori"],
//         avgRating: 4.5,
//         veg: true,
//     },
//     {
//         id: "3477748978",
//         name: "Tiffins",
//         cloudinaryImageId: "8759cb1007417b7df753a2960300cb02",
//         locality: "Manikonda",
//         areaName: "Narsingi",
//         costForTwo: "₹150 for two",
//         cuisines: ["South Indian", "North Indian", "Thandoori"],
//         avgRating: 4.5,
//         veg: true,
//     },
//     {
//         id: "3477748911",
//         name: "Tiffins",
//         cloudinaryImageId: "b7a607f336f0815cd1056262006bb257",
//         locality: "Manikonda",
//         areaName: "Narsingi",
//         costForTwo: "₹150 for two",
//         cuisines: ["South Indian", "North Indian", "Thandoori"],
//         avgRating: 4.5,
//         veg: true,
//     }
// ];


// const BestoffersComponent = (props) =>{
//     const{bestofferData} = props;
//     console.log(bestofferData)
//     return(
//         <div className="card">
//             <img src ={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/"+ bestofferData.cloudinaryImageId}/>
//         </div>
     
//     )
// }
// const Bodycomponent = () => {
//     return (
//         <div className="container body mt-5">
//             <div className="row">
//                 <h2 className="m-3">Best offers for you</h2>
//                 <div className="col-lg-4">
//                     <BestoffersComponent
//                     bestofferData = {bestoffer_Data[0]}
//                     />
//                 </div>
//                 <div className="col-lg-4">
//                     <BestoffersComponent
//                     bestofferData = {bestoffer_Data[1]}
//                     />
//                 </div>
//                 <div className="col-lg-4">
//                     <BestoffersComponent
//                     bestofferData = {bestoffer_Data[2]}
//                     />
//                 </div>
//             </div>
//             <div className="row ">

//                 <h2>Restaurants With Great Offers Near Me</h2>
//                 <div className="col-lg-4 p-3 rest_flex">

//                     {restorent_Data.map((restrant) => (<RestoComponent restroData={restrant} />))
//                     };
//                 </div>
              
//             </div>
            
//         </div>


//     )
// };

// const FooterComponent = () => {
//     return (
//         <div className="footer">
//             Copyright &copy; www.My website.com.All rights reserved.
//         </div>
//     )
// };
const AppComponent = () => {
    return (
        <div className="Container-fluid">
            <HeaderComponent />
            <Bodycomponent />
            <FooterComponent />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent />);
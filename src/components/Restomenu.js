import { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./shimmer";
import Searchcomponent from "./Search";
import { API_RESTRO_MENU } from "../utilises/constant";
import { restro_menu_img } from "../utilises/constant";
import { useParams } from "react-router-dom";
import Restrocatagory from "./Restrocatagory";


const Restromenucomponent = () => {
  const [restroinfo, setrestroinfo] = useState(null);
  const { restroID } = useParams()//params are used to fetch the url id of restro,restroID should be write in this way.
  //console.log(restroID)

  // const [search, updatesearch] = useState("false")
  


  useEffect(() => {
    getrestromenu()
  }, [])

  const getrestromenu = async () => {
    try {
      //to fetch the API

      const restroresponse = await axios.get(API_RESTRO_MENU + restroID)
      //console.log(restroresponse)
      //console.log(restroresponse.data)
      setrestroinfo(restroresponse.data)

    } catch {
      //API error
      console.error(":something went wrong")
    }
  }
  if (restroinfo === null) {
    return <Shimmer></Shimmer>
  }
  const { name, cuisines, locality,avgRating,totalRatingsString } = restroinfo.data.cards[0].card.card.info;
  const { lastMileTravelString } = restroinfo.data.cards[0].card.card.info.sla;
  const { offers } = restroinfo.data.cards[1].card.card.gridElements.infoWithStyle;
  const catgories = restroinfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (c)=>(c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))

  console.log(catgories)
  // const { itemCards } = restroinfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  return (
    <div className="container">
      {/* <button onClick={()=>{
        search === "false" ? updatesearch(<input type="search"/>) : updatesearch("false")
        }} >{search}</button>
            */}
        
      <div className="row my-5">
        <div className="col-lg-6">
          <h3 className="">{name}</h3>

          <span>{cuisines.join(",")}</span>
          <p><span>{locality},{lastMileTravelString}</span></p>
        </div>
        <div className="col ">
          
           <p className="border border-1  w-25 py-1 text-center fw-bold" > <i className="bi bi-star-fill" ></i> {avgRating}<hr /> <small>{totalRatingsString}</small> </p>
         
        </div>
        
      </div>
     



      <div className="mb-5">
      {offers.map((offer) =>
        <span className="">{offer.info.header}</span>
        
      )}
      </div>
      {/* <p>{restroinfo.data.cards[1].card.card.gridElements.infoWithStyle.offers[0].info.header}</p>
       <p>{restroinfo.data.cards[1].card.card.gridElements.infoWithStyle.offers[1].info.header}</p>
       <p>{restroinfo.data.cards[1].card.card.gridElements.infoWithStyle.offers[2].info.header}</p> */}


      {/* <ul className="list-group list-group-flush">
        {itemCards.map((item) =>
          <li className="list-group-item">{item.card.info.name}-{item.card.info.price}-<img src={restro_menu_img+item.card.info.imageId}/>
          
          </li>
        )} */}


        {/* <li className="list-group-item">{restroinfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[0].card.card.vegOnlyDetails.title}</li>
        <li className="list-group-item">{restroinfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name}</li>
        <li className="list-group-item">{restroinfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[1].card.info.name}</li> 
        <img src={item.card.info.name.imageId + restro_menu_img}/>*/}
      {/* </ul> */}

      {
        catgories.map((catgory)=>(
          <Restrocatagory data = {catgory.card.card}/>
        ))
      }



    </div>
  )
};
export default Restromenucomponent;
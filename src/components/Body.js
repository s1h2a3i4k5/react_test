import RestoComponent, { withoneFreeDelivery } from "./Restro";
import BestoffersComponent from "./Bestoffers";
import { useEffect, useState,useContext } from "react";
import UserContext from "../utilises/UserContext";

import { Link } from "react-router-dom";
import Shimmer from "./shimmer";
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
    // const Userdetails = useContext(UserContext)
    //Whenever we update the state variable(restorent_Data,filteredrestrant)-React automatically will do Re-rendering the entire Body component
    const [restorent_Data, filteredrestrant] = useState([]);//restrant data usestate
    const [parentdata,updateparentdata] = useState([]);
    const [searchtext, updatesearchtext] = useState("");
    const [avgrating,Setavgrating] = useState([])
    const Restro_onefreedeveliy_Label = withoneFreeDelivery(RestoComponent)/** HOF Formate same as another component <withoneFreeDelivery/> */

    useEffect(() => {
        fetch_data()
    }, [])

    const fetch_data = async () => {
        const res_data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const original_data = await res_data.json();
        //console.log(original_data)
        //const api_data = original_data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
        const api_raw_data =

            [
                {

                    id: "4650",
                    name: "Bawarchi",
                    cloudinaryImageId: "smfhai0o8rnjuzp3ngxu",
                    locality: "Chikkadpally",
                    areaName: "New Nallakunta",
                    costForTwo: "₹300 for two",
                    oneFreeDelivery: true,
                    cuisines: [
                        "Biryani",
                        "Tandoor",
                        "Chinese",
                        "Indian",
                        "Desserts",
                        "Kebabs",
                        "Mughlai"
                    ],
                    avgRating: 4.1,
                    feeDetails: {
                        restaurantId: "4650",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2800
                    },
                    parentId: "100",
                    avgRatingString: "4.1",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 50,
                        lastMileTravel: 2.8,
                        serviceability: "SERVICEABLE",
                        slaString: "50 mins",
                        lastMileTravelString: "2.8 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-30 01:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/bawarchi-chikkadpally-new-nallakunta-hyderabad-4650",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "4138",
                    name: "Grand Hotel",
                    cloudinaryImageId: "g1arzw6qd7g9affkmgzk",
                    locality: "Abids",
                    areaName: "Abids",
                    costForTwo: "₹300 for two",
                    oneFreeDelivery: true,
                    cuisines: [
                        "Biryani",
                        "Chinese",
                        "Tandoor",
                        "Haleem"
                    ],
                    avgRating: 4.1,
                    feeDetails: {
                        restaurantId: "4138",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2800
                    },
                    parentId: "4001",
                    avgRatingString: "4.1",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 20,
                        lastMileTravel: 1,
                        serviceability: "SERVICEABLE",
                        slaString: "20 mins",
                        lastMileTravelString: "1.0 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-30 00:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "10% OFF",
                        subHeader: "UPTO ₹40"
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/grand-hotel-abids-hyderabad-4138",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "367769",
                    name: "Lucky Restaurant",
                    cloudinaryImageId: "qems028i3da5rxf81rbp",
                    locality: "Banjara Hills",
                    areaName: "MasabTank",
                    costForTwo: "₹300 for two",
                    oneFreeDelivery: false,
                    cuisines: [
                        "Biryani",
                        "North Indian",
                        "Tandoor"
                    ],
                    avgRating: 3.9,
                    feeDetails: {
                        restaurantId: "367769",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 5400
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 5400
                    },
                    parentId: "293683",
                    avgRatingString: "3.9",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 38,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "38 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-30 01:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75"
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/lucky-restaurant-banjara-hills-masabtank-hyderabad-367769",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "142670",
                    name: "Shah Ghouse Cafe & Restaurant",
                    cloudinaryImageId: "bk26jkkqpg55veii0aj9",
                    locality: "Santh Nirankari Satsang Bhavan",
                    areaName: "Lakdikapul",
                    costForTwo: "₹350 for two",
                    oneFreeDelivery: true,
                    cuisines: [
                        "Biryani",
                        "Chinese",
                        "Tandoor",
                        "Mughlai",
                        "North Indian"
                    ],
                    avgRating: 4.1,
                    feeDetails: {
                        restaurantId: "142670",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 3900
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 3900
                    },
                    parentId: "18992",
                    avgRatingString: "4.1",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 47,
                        lastMileTravel: 4.9,
                        serviceability: "SERVICEABLE",
                        slaString: "47 mins",
                        lastMileTravelString: "4.9 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-29 23:59:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "20% OFF",
                        subHeader: "UPTO ₹50"
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/shah-ghouse-cafe-and-restaurant-santh-nirankari-satsang-bhavan-lakdikapul-hyderabad-142670",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "57903",
                    name: "Capital Multi Cuisine Restaurant",
                    cloudinaryImageId: "ijy2jxi7lfwsebdtazpi",
                    areaName: "Malakpet",
                    costForTwo: "₹500 for two",
                    oneFreeDelivery: true,
                    cuisines: [
                        "Biryani",
                        "Arabian",
                        "Lebanese"
                    ],
                    avgRating: 3.8,
                    feeDetails: {
                        restaurantId: "57903",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 3900
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 3900
                    },
                    parentId: "19262",
                    avgRatingString: "3.8",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 20,
                        lastMileTravel: 3.7,
                        serviceability: "SERVICEABLE",
                        slaString: "20 mins",
                        lastMileTravelString: "3.7 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-30 02:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100"
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/capital-multi-cuisine-restaurant-malakpet-hyderabad-57903",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "1590",
                    name: "Sarvi Restaurant",
                    cloudinaryImageId: "ds6nasa6qpxunkhglz5g",
                    locality: "Road 11",
                    areaName: "Banjara Hills",
                    costForTwo: "₹400 for two",
                    oneFreeDelivery: false,
                    cuisines: [
                        "Biryani",
                        "Chinese",
                        "Indian",
                        "Kebabs",
                        "Tandoor",
                        "Desserts"
                    ],
                    avgRating: 4.2,
                    feeDetails: {
                        restaurantId: "1590",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 6200
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 6200
                    },
                    parentId: "4623",
                    avgRatingString: "4.2",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 42,
                        lastMileTravel: 6.9,
                        serviceability: "SERVICEABLE",
                        slaString: "42 mins",
                        lastMileTravelString: "6.9 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-30 00:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/sarvi-restaurant-road-11-banjara-hills-hyderabad-1590",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "3324",
                    name: "Srikanya",
                    cloudinaryImageId: "tw4ytwle8yommmgdy4b0",
                    locality: "Punjagutta Road",
                    areaName: "Punjagutta",
                    costForTwo: "₹250 for two",
                    oneFreeDelivery: true,
                    cuisines: [
                        "Andhra",
                        "Seafood"
                    ],
                    avgRating: 4.1,
                    feeDetails: {
                        restaurantId: "3324",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 6200
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 6200
                    },
                    parentId: "7317",
                    avgRatingString: "4.1",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 40,
                        lastMileTravel: 6.9,
                        serviceability: "SERVICEABLE",
                        slaString: "40 mins",
                        lastMileTravelString: "6.9 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-29 15:30:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/srikanya-road-punjagutta-hyderabad-3324",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "140117",
                    name: "Imperial Multi Cuisine Restaurant",
                    cloudinaryImageId: "ib97mlmkhuwwv51syyca",
                    locality: "saidabad x road",
                    areaName: "Malakpet",
                    costForTwo: "₹400 for two",
                    oneFreeDelivery: true,
                    cuisines: [
                        "Biryani",
                        "Chinese",
                        "Indian",
                        "Kebabs",
                        "Tandoor"
                    ],
                    avgRating: 4.2,
                    feeDetails: {
                        restaurantId: "140117",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 3900
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 3900
                    },
                    parentId: "19253",
                    avgRatingString: "4.2",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 21,
                        lastMileTravel: 3.6,
                        serviceability: "SERVICEABLE",
                        slaString: "21 mins",
                        lastMileTravelString: "3.6 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-29 23:59:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75"
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/imperial-multi-cuisine-restaurant-saidabad-x-road-malakpet-hyderabad-140117",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "32129",
                    name: "Burger King",
                    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                    locality: "Himayath Nagar",
                    areaName: "Himayatnagar",
                    costForTwo: "₹350 for two",
                    oneFreeDelivery: false,
                    cuisines: [
                        "Burgers",
                        "American"
                    ],
                    avgRating: 4.1,
                    feeDetails: {
                        restaurantId: "32129",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2800
                    },
                    parentId: "166",
                    avgRatingString: "4.1",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 42,
                        lastMileTravel: 2.6,
                        serviceability: "SERVICEABLE",
                        slaString: "42 mins",
                        lastMileTravelString: "2.6 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-30 00:45:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120"
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/burger-king-himayath-nagar-himayatnagar-hyderabad-32129",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "27739",
                    name: "Cafe Niloufer Classic",
                    cloudinaryImageId: "67ca79626844963d6979835661ac45a0",
                    locality: "Lakdikapul",
                    areaName: "Redhills",
                    costForTwo: "₹150 for two",
                    oneFreeDelivery: true,
                    cuisines: [
                        "Bakery",
                        "Beverages",
                        "Snacks",
                        "Desserts"
                    ],
                    avgRating: 4.5,
                    feeDetails: {
                        restaurantId: "27739",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 3900
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 3900
                    },
                    parentId: "19273",
                    avgRatingString: "4.5",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 33,
                        lastMileTravel: 4.1,
                        serviceability: "SERVICEABLE",
                        slaString: "33 mins",
                        lastMileTravelString: "4.1 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-30 00:30:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/cafe-niloufer-classic-lakdikapul-redhills-hyderabad-27739",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "118745",
                    name: "McDonald's",
                    cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
                    locality: "ABITS MPM MALL",
                    areaName: "Abids & Koti",
                    costForTwo: "₹400 for two",
                    oneFreeDelivery: true,
                    cuisines: [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                    ],
                    avgRating: 4,
                    feeDetails: {
                        restaurantId: "118745",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2800
                    },
                    parentId: "630",
                    avgRatingString: "4.0",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 34,
                        lastMileTravel: 1.3,
                        serviceability: "SERVICEABLE",
                        slaString: "34 mins",
                        lastMileTravelString: "1.3 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-30 02:45:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "10% OFF",
                        subHeader: "ABOVE ₹999",
                        discountTag: "FLAT DEAL"
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/mcdonalds-abits-mpm-mall-abids-and-koti-hyderabad-118745",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "1970",
                    name: "Cream Stone Ice Cream",
                    cloudinaryImageId: "ecdb8917a93d30f0f633ac4163119cd5",
                    locality: "Liberty Road",
                    areaName: "Basheer Bagh",
                    costForTwo: "₹350 for two",
                    oneFreeDelivery: false,
                    cuisines: [
                        "Ice Cream",
                        "Desserts",
                        "Beverages",
                        "Ice Cream Cakes"
                    ],
                    avgRating: 4.4,
                    veg: true,
                    feeDetails: {
                        restaurantId: "1970",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2800
                    },
                    parentId: "289",
                    avgRatingString: "4.4",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 33,
                        lastMileTravel: 2.9,
                        serviceability: "SERVICEABLE",
                        slaString: "33 mins",
                        lastMileTravelString: "2.9 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-29 23:59:00",
                        opened: true
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C"
                            }
                        ]
                    },
                    isOpen: true,
                    type: "D",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "",
                                            fontColor: "#7E808C",
                                            iconId: "guiltfree/GF_Logo_android_3x",
                                            shortDescription: "options available"
                                        }
                                    }
                                ]
                            }
                        }
                        ,
                        aggregatedDiscountInfoV3: {
                            header: "40% OFF",
                            subHeader: "UPTO ₹80"
                        },
                        orderabilityCommunication: {
                            title: {},
                            subTitle: {},
                            message: {},
                            customIcon: {}
                        },
                        differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                                lottie: {},
                                video: {}
                            }
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {}
                    },
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/cream-stone-ice-cream-liberty-road-basheer-bagh-hyderabad-1970",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "46872",
                    name: "Paradise Biryani",
                    cloudinaryImageId: "vhbgaebk4scj5fcfijzg",
                    locality: "Mahatma Gandhi Bus Station",
                    areaName: "Malakpet",
                    costForTwo: "₹400 for two",
                    oneFreeDelivery: true,
                    cuisines: [
                        "Biryani",
                        "Kebabs",
                        "North Indian",
                        "Hyderabadi"
                    ],
                    avgRating: 3.6,
                    feeDetails: {
                        restaurantId: "46872",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2800
                    },
                    parentId: "700",
                    avgRatingString: "3.6",
                    totalRatingsString: "5K+",
                    sla: {
                        deliveryTime: 22,
                        lastMileTravel: 2.2,
                        serviceability: "SERVICEABLE",
                        slaString: "22 mins",
                        lastMileTravelString: "2.2 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-29 23:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹349",
                        discountTag: "FLAT DEAL"
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/paradise-biryani-mahatma-gandhi-bus-station-malakpet-hyderabad-46872",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "108986",
                    name: "NIC Ice Creams",
                    cloudinaryImageId: "c8b98c4064dc2fd6bdf350212e5f0bd5",
                    locality: "KMIT",
                    areaName: "Narayanguda",
                    costForTwo: "₹120 for two",
                    oneFreeDelivery: true,
                    cuisines: [
                        "Ice Cream",
                        "Desserts"
                    ],
                    avgRating: 4.4,
                    veg: true,
                    feeDetails: {
                        restaurantId: "108986",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2800
                    },
                    parentId: "6249",
                    avgRatingString: "4.4",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 20,
                        lastMileTravel: 1.6,
                        serviceability: "SERVICEABLE",
                        slaString: "20 mins",
                        lastMileTravelString: "1.6 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-29 23:59:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100"
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/nic-ice-creams-kmit-narayanguda-hyderabad-108986",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "27665",
                    name: "Pista House",
                    cloudinaryImageId: "xrnrtevdf9w3pfvxlaei",
                    locality: "Chikkadapalli Road",
                    areaName: "New Nallakunta",
                    costForTwo: "₹200 for two",
                    cuisines: [
                        "Bakery",
                        "Pizzas",
                        "Snacks",
                        "Desserts"
                    ],
                    avgRating: 4.3,
                    feeDetails: {
                        restaurantId: "27665",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2800
                    },
                    parentId: "1732",
                    avgRatingString: "4.3",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 23,
                        lastMileTravel: 2.8,
                        serviceability: "SERVICEABLE",
                        slaString: "23 mins",
                        lastMileTravelString: "2.8 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-29 22:30:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "10% OFF",
                        subHeader: "UPTO ₹40"
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/pista-house-chikkadapalli-road-new-nallakunta-hyderabad-27665",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "6994",
                    name: "Santosh Dhaba Exclusive",
                    cloudinaryImageId: "jllcesio37olflwnvter",
                    locality: "Hanuman Tekdi",
                    areaName: "Koti",
                    costForTwo: "₹300 for two",
                    oneFreeDelivery: false,
                    cuisines: [
                        "North Indian",
                        "Biryani",
                        "Chinese",
                        "Italian",
                        "Mexican",
                        "Desserts"
                    ],
                    avgRating: 4.1,
                    veg: true,
                    feeDetails: {
                        restaurantId: "6994",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2800
                    },
                    parentId: "8784",
                    avgRatingString: "4.1",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 26,
                        lastMileTravel: 1,
                        serviceability: "SERVICEABLE",
                        slaString: "26 mins",
                        lastMileTravelString: "1.0 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-30 03:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75"
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/santosh-dhaba-exclusive-hanuman-tekdi-koti-hyderabad-6994",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "193571",
                    name: "The Bowl Company",
                    cloudinaryImageId: "bb6049fae59b8a2413a9177eb0338b49",
                    locality: "Mahatee Niketan Apartments",
                    areaName: "Himayath Nagar",
                    costForTwo: "₹300 for two",
                    oneFreeDelivery: true,
                    cuisines: [
                        "Pan-Asian",
                        "Continental",
                        "North Indian",
                        "Desserts",
                        "American",
                        "Asian",
                        "Beverages",
                        "Biryani",
                        "Chinese",
                        "European",
                        "Grill",
                        "Hyderabadi",
                        "Indian",
                        "Italian",
                        "Kebabs",
                        "Lucknowi",
                        "Mediterranean",
                        "Mexican",
                        "Mughlai",
                        "Oriental",
                        "Pastas",
                        "Punjabi",
                        "Raja"
                    ],
                    avgRating: 4.1,
                    feeDetails: {
                        restaurantId: "193571",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2800
                    },
                    parentId: "4317",
                    avgRatingString: "4.1",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 24,
                        lastMileTravel: 1.5,
                        serviceability: "SERVICEABLE",
                        slaString: "24 mins",
                        lastMileTravelString: "1.5 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-30 01:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "45% OFF",
                        subHeader: "UPTO ₹80"
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/the-bowl-company-mahatee-niketan-apartments-himayath-nagar-hyderabad-193571",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "37103",
                    name: "KFC",
                    cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
                    locality: "Abids Road",
                    areaName: "Basheer Bagh",
                    costForTwo: "₹400 for two",
                    oneFreeDelivery: true,
                    cuisines: [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food"
                    ],
                    avgRating: 4,
                    feeDetails: {
                        restaurantId: "37103",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 3300
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 3300
                    },
                    parentId: "547",
                    avgRatingString: "4.0",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 23,
                        lastMileTravel: 2,
                        serviceability: "SERVICEABLE",
                        slaString: "23 mins",
                        lastMileTravelString: "2.0 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-30 00:28:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "20% OFF",
                        subHeader: "UPTO ₹50"
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/kfc-abids-road-basheer-bagh-hyderabad-37103",
                        type: "WEBLINK"
                    }
                },
                {
                    id: "60071",
                    name: "Karachi Bakery",
                    cloudinaryImageId: "217a184d6bd2d39015343807eb6cd77a",
                    locality: "Saleem Nagar",
                    areaName: "Old Malakpet",
                    costForTwo: "₹400 for two",
                    oneFreeDelivery: false,
                    cuisines: [
                        "Bakery",
                        "Pizzas",
                        "Chinese",
                        "Italian",
                        "American",
                        "Sweets",
                        "Desserts",
                        "Beverages"
                    ],
                    avgRating: 4.2,
                    feeDetails: {
                        restaurantId: "60071",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 3900
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 3900
                    },
                    parentId: "1262",
                    avgRatingString: "4.2",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 23,
                        lastMileTravel: 3.6,
                        serviceability: "SERVICEABLE",
                        slaString: "23 mins",
                        lastMileTravelString: "3.6 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-29 21:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/karachi-bakery-saleem-nagar-old-malakpet-hyderabad-60071",
                        type: "WEBLINK"
                    }
                },
                {

                    id: "65483",
                    name: "Istah - The Mediterranean Way",
                    cloudinaryImageId: "9a01f2935fcb5ae05426db8264062102",
                    locality: "Mahatee Niketan Apartments",
                    areaName: "Himayath Nagar",
                    costForTwo: "₹250 for two",
                    oneFreeDelivery: true,
                    cuisines: [
                        "Mediterranean",
                        "Snacks",
                        "Biryani",
                        "Grill",
                        "Kebabs",
                        "Arabian",
                        "Lebanese",
                        "Beverages",
                        "Desserts",
                        "Italian",
                        "Turkish"
                    ],
                    avgRating: 4.2,
                    feeDetails: {
                        restaurantId: "65483",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2800
                    },
                    parentId: "3518",
                    avgRatingString: "4.2",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 29,
                        lastMileTravel: 1.5,
                        serviceability: "SERVICEABLE",
                        slaString: "29 mins",
                        lastMileTravelString: "1.5 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-08-30 01:00:00",
                        opened: true
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C"
                            }
                        ]
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "",
                                            fontColor: "#7E808C",
                                            iconId: "guiltfree/GF_Logo_android_3x",
                                            shortDescription: "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹100"
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                    ,
                    analytics: {},
                    cta: {
                        link: "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-mahatee-niketan-apartments-himayath-nagar-hyderabad-65483",
                        type: "WEBLINK"
                    }
                }
            ]
         
        filteredrestrant(api_raw_data);//[{}]
        //filteredrestrant(api_data)//api data 
        //console.log(filteredrestrant)
         updateparentdata(api_raw_data);
         Setavgrating(api_raw_data);
    }

    //conditional Rendering
    if (restorent_Data.length === 0) {
        return <Shimmer></Shimmer>
    }


    return (

        <div className="container body mt-5">
            <div className="row">
                <h2 className="">Best offers for you</h2>
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
            <div className="row pt-5">
                <div className="col">
                    <button className="top_restro" onClick={() => {
                        let restro_filter = avgrating.filter((toprestrant) => (toprestrant.avgRating > 4))
                        filteredrestrant(restro_filter)
                        console.log(restro_filter)
                        // console.log("Button clicked")
                    }}>Top Rated Restaurants</button>
                   
                    <button className="top_restro" onClick={() => {
                        let Parent_ID = parentdata.filter((toprestrant) => (toprestrant.parentId =="100"))
                        filteredrestrant(Parent_ID)
                        console.log(Parent_ID)
                        // console.log("Button clicked")
                    }}>Top Rated parent ID</button>
                     

                    <div className="col-lg-4 pt-3">
                        <input className="search" value={searchtext} onChange={(e) => {
                            updatesearchtext(e.target.value)
                        }} />
                        <button className="" onClick={() => {
                            //  alert(searchtext)
                            const usersearchdata = restorent_Data.filter((searchdata) => (searchdata.name.toLowerCase().includes(searchtext.toLowerCase())))
                            filteredrestrant(usersearchdata)
                        }}>Search</button>

                    </div>
                </div>
            </div>




            {/* <---------------------------Restaurants near me----------------------> */}
            <div className="row">

                <h2 className="pt-4">Restaurants With Great Offers Near Me</h2>


                {restorent_Data.map((restrant) =>

                (<div className="col-lg-4">
                    <Link to={"Restromenu/" + restrant.id} style={{ textDecoration: "none" }}>
                        {
                            restrant.oneFreeDelivery ? <Restro_onefreedeveliy_Label restroData={restrant} /> : <RestoComponent restroData={restrant} />
                        }
                    </Link>
                </div>))


                }
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


    )
}
export default Bodycomponent;
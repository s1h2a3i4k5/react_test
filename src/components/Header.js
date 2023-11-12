import { useCallback, useEffect, useState,useContext } from "react";
import { SITE_HEADER_URL } from "../utilises/constant";
import { Link } from "react-router-dom";
import UserContext from "../utilises/UserContext";
import UserPayment from "../utilises/UserPayment";
import { useSelector } from "react-redux";




const HeaderComponent = () => {
    const [loginbutton ,logoutbutton] = useState("Login")
    const Userdetails = useContext(UserContext)
    const Userpayment = useContext(UserPayment)
    const cartItems = useSelector((store) => store.cart.items) /**To subscribe the store using selectores */
    console.log(cartItems)
    
    return (
        <nav className="navbar  navbar-expand-sm sticky-top">
            <div class="container-fluid">
                <a href="#" className="navbar-brand"><img className="rounded-circle" src={SITE_HEADER_URL} alt="" height="70px" /></a>
                {/* <p className="m-2">Others</p>
                <p className="m-2">Select the location<i class="fa-sharp fa-solid fa-location-dot"></i></p> */}
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mynav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mynav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a href="#" className="nav-link"><input type="Search" className="search" /><i className="fa-solid fa-magnifying-glass" ></i>Search</a></li>
                        <li className="nav-item"><Link to="/About" className="nav-link"><i className="fa-solid fa-check"></i>About us</Link></li>
                        <li className="nav-item"><Link to="/Contact" className="nav-link"><i className="fa-solid fa-circle-info"></i>Help</Link></li>
                        <li className="nav-item"><Link to="/Services" className="nav-link"><i className="fa-solid fa-user"></i>Sign in</Link></li>
                        <li className="nav-item"><Link to="/Card" className="nav-link"><i className="fa-brands fa-cc-amazon-pay"></i>Card({cartItems.length})</Link></li>
                       
                        <li className="nav-item"><Link to="/About" className="nav-link">{Userdetails.Login_user_name}</Link></li>
                        <li className="nav-item"><Link to="/About" className="nav-link">{ Userpayment. product_price}</Link></li>
                        <button className="btn" onClick={()=>{
                           loginbutton === "Login" ? logoutbutton("Logout") : logoutbutton("Login");//Ternary operator ===(it will also check the data type(int,strung,boolean),= assiging value,== comparing the value a)
                        }}>{loginbutton}</button>

                    </ul>

                </div>

            </div>
        </nav>

    )
}
export default HeaderComponent;
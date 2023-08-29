import { SITE_HEADER_URL } from "../utilises/constant";

const HeaderComponent = () => {
    return (
        <nav className="navbar  navbar-expand-sm sticky-top">
            <div class="container-fluid">
                <a href="#" className="navbar-brand"><img className="rounded-circle" src={SITE_HEADER_URL} alt="" height="70px" /></a>
                <p className="m-2">Others</p>
                <p className="m-2">Select the location<i class="fa-sharp fa-solid fa-location-dot"></i></p>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mynav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a href="#" className="nav-link"><input type="Search" className="search" /><i className="fa-solid fa-magnifying-glass" ></i>Search</a></li>
                        <li className="nav-item"><a href="#" className="nav-link"><i className="fa-solid fa-check"></i>Offers</a></li>
                        <li className="nav-item"><a href="#" className="nav-link"><i className="fa-solid fa-circle-info"></i>Help</a></li>
                        <li className="nav-item"><a href="#" className="nav-link"><i className="fa-solid fa-user"></i>Sign in</a></li>
                        <li className="nav-item"><a href="#" className="nav-link"><i className="fa-brands fa-cc-amazon-pay"></i>Card</a></li>

                    </ul>

                </div>

            </div>
        </nav>

    )
}
export default HeaderComponent;
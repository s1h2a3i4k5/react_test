import { useRouteError } from "react-router-dom";

const Error = () =>{
    const error = useRouteError();//To check which type of error it is like AP'S,Page not found.
    console.log(error)
    return(
        <div className="container">
            <h1>OOP'S</h1>
            {/* <p>Page is not found,Try again later</p> */}
            <p>{error.status} {error.statusText},{error.data}</p>
        </div>
    )
};
export default Error;
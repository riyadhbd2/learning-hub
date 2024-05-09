import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


const Head = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>  
        </div>
    );
};

export default Head;
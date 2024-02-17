import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";


const Root = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
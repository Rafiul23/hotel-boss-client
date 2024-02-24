import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
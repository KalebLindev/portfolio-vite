import NavBar from "./NavBar";
import Footer from "./Footer";
import LightingPage from "./LightingPage";
import { Outlet } from "react-router";

const Root = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root
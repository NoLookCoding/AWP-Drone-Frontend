import { Outlet, Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <>
        <div className="header-frame">

        <div className="header-top-frame">
    
        </div>
        <div className="header-nav-frame">
            <div className="header-name"> Drones</div>
            <div className="header-nav-button-frame">
                    <Link to = "/">
                    <button className="header-nav-button-item">
                        Definition
                    </button>
                    </Link> 
         
                    <Link to = "/usage">
                    <button className="header-nav-button-item">
                        Usage
                    </button>
                    </Link> 

                    <Link to = "/store">
                    <button className="header-nav-button-item">
                        Store
                    </button>
                    </Link> 

                    <Link to = "/cart">
                    <button className="header-nav-button-item">
                        Cart
                    </button>
                    </Link> 
            </div>
        </div>
        <Outlet/>
        </div>
        </>
    );
}
export default Header;

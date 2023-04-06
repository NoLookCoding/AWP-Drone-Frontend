import { Outlet, Link } from "react-router-dom"
import './Footer.css'


const Header = () => {
    return (
        <>
    
        <div className="footer-nav-frame">
            <div className="footer-nav-button-frame">
                    <Link to = "/">
                    <button className="footer-nav-button-item">
                        개인정보
                    </button>
                    </Link> 
         
                    <Link to = "/usage">
                    <button className="footer-nav-button-item">
                        nolookcoding
                    </button>
                    </Link> 

                    <Link to = "/store">
                    <button className="footer-nav-button-item">
                        copyright
                    </button>
                    </Link> 

                    <Link to = "/cart">
                    <button className="footer-nav-button-item">
                        Cart
                    </button>
                    </Link> 
            </div>
        </div>
        </>
    );
}
export default Header;

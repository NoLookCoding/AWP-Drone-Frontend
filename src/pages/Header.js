import { Outlet, Link } from "react-router-dom"
import './Header.css'
import {AiOutlineShoppingCart } from "react-icons/ai"

const Header = () => {
    return (
        <div className="header-container">
        <div className="header-frame">

        <div className="header-top-frame">
    
        </div>
        


        <div className="header-nav-frame">
        <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="header-logo-container">
            <div className="header-logo"> </div>
            </div>
            </Link>
            <div className="header-nav-button-frame">
           
                    <Link to = "/introduce">
                    <button className="header-nav-button-item">
                        회사 소개 {/* Introduce */}
                    </button>
                    </Link> 
         
                    <Link to = "/usage">
                    <button className="header-nav-button-item">
                        드론 사용
                    </button>
                    </Link> 

                    <Link to = "/store">
                    <button className="header-nav-button-item">
                        드론스토어
                    </button>
                    </Link> 

                    <Link to = "/membership">
                    <button className="header-nav-button-item">
                        멤버십
                    </button>
                    </Link>

                    <Link to = "/login">
                    <button className="header-nav-button-item">
                        로그인
                    </button>
                    </Link>

                    <Link to = "/cart">
                    <AiOutlineShoppingCart className="header-nav-button-icon"/>
                    </Link> 
                
                    <div></div>
            </div>
        </div>
        <div className="outlet-container">
            <Outlet/>
        </div>
        </div>
        </div>
    );
}
export default Header;
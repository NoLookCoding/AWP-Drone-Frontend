import { Outlet, Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <>
        <div className="header-frame">
    
        </div>
        <table>
            <tr>
                <td> 
                    <Link to = "/">
                    <button>
                        Definition
                    </button>
                    </Link> 
                </td>
                <td> 
                    <Link to = "/usage">
                    <button>
                        Usage
                    </button>
                    </Link> 
                </td>
                <td> 
                    <Link to = "/store">
                    <button>
                        Store
                    </button>
                    </Link> 
                </td>
                <td> 
                    <Link to = "/cart">
                    <button>
                        Cart
                    </button>
                    </Link> 
                </td>
            </tr>
        </table>
        <Outlet/>
        </>
    );
}
export default Header;

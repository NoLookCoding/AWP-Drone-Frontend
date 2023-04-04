import { Outlet, Link } from "react-router-dom"

const Header = () => {
    return (
        <>
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

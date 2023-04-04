import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return (
        <>
        <h1>Welcome to the Serive of Car Sales</h1>
            <nav>
                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/carinfo">CarInfo</Link>
                    </li>
                    <li>
                        <Link to = "/userinfo">UserInfo</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}
export default Layout;

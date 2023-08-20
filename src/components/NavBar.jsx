import { BrowserRouter as Links } from "react-router-dom"

const NavBar = () => {

    return (

        <div className="Nav">
            <nav>
                <Link to="/" >
                    <h3>Home</h3>
                </Link>

                <Link to="/about" >
                    <h3>About Us</h3>
                </Link>

                <Link to="/search" >
                    <h3>Search</h3>
                </Link>
            </nav>

        </div>

    )
};

export default NavBar;
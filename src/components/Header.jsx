import { BrowserRouter as Link } from "react-router-dom"

const Header = () => {

    return (

        <header>

            <div className="navbar bg-light my-2">
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
            
        </header>
    )
}

export default Header;
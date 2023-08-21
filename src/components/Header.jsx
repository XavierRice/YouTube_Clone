import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./Home";


const Header = () => {

    return (

        <header>
            <div className="navbar navbar-expand-lg navbar-light bg-light fixed">
                <div className="container">
                    <nav>
                        <Link to="/" >
                            <h3>Home</h3>
                        </Link>

                        <Link to="/about" >
                            <h3>About Us</h3>
                        </Link>
                    </nav>
                    <Routes>
                        <Route path='/' />
                        <Route path='/about' />
                    </Routes>
                </div>
            </div>
        </header>
    )
}

export default Header;
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"



const Header = () => {

    return (

        <header className="fixed" >
            <div className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container">
                    <nav>
                        <span>
                            <ul>
                                <li>
                                    <Link to="/" >
                                        <h5>Home</h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" >
                                        <h5>About Us</h5>
                                    </Link>
                                </li>
                            </ul>
                        </span>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;
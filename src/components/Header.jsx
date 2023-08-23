import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import {IolosPeople} from "react-icons/io"

{/* style={{ width: '18rem' }} */}

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
                                    <Link to="/aboutus" >
                                        <h5>About <IolosPeople/> Us</h5>
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
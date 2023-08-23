import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "../components/styles.css"

{/* style={{ width: '18rem' }} */ }

const Header = () => {

    return (

        <header className="fixed" >
            <div className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container">
                    <div className="img-style">
                        <img src="src/assets/YoutubeLogo.png" alt="image of a red figure watching the tube" width="310px" height="120" />
                    </div>
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
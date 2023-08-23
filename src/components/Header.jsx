import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "../components/styles.css";
import { AiFillYoutube } from "react-icons/ai"


{/* style={{ width: '18rem' }} */ }


const Header = () => {

    return (

        <div className="container">
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
                                        <h5> Ho<AiFillYoutube id="home-icon" />me</h5>
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
        </header>
            </div>
    )
}

export default Header;
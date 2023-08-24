import {  Link } from "react-router-dom"
import { TbUsersGroup } from "react-icons/tb"
import { AiFillYoutube } from "react-icons/ai"
import leftLogo from "/74H4.gif"
import rightLogo from "/youtube.png"
import "../components/styles.css";

const Header = () => {

    return (

        <header className="fixed">
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="img-style">
                        <img src={leftLogo} alt="image of a red figure watching the tube" width="310px" height="120" />
                    </div>
                    <div className="video-style" >
                        <img src={rightLogo} alt="animation of children dancing" width="220px" height="160px" />
                    </div>
                    <nav>
                        <span>
                            <ul>
                                <li>
                                    <Link to="/" >
                                        <h5 className="nav-links"> Ho<AiFillYoutube id="home-icon" />me</h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/aboutus" >
                                        <h5 className="nav-links1">About <TbUsersGroup id="about-us" /> Us</h5>
                                    </Link>
                                </li>
                            </ul>
                        </span>
                    </nav>
                </div>
            </div>
        </header >
    )
};

export default Header;
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./Home";


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
                     </ul>        
                    <ul>
                    <li>
                    <Link to="/about" >
                    <h5>About Us</h5>
                    </Link>
                   </li>                 
                 </ul>
                </span>
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
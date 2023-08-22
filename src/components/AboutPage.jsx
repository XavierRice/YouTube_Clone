import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './AboutPage.css'
import Footer from "./Footer";

    const AboutPage =()=>{
        return (
            <>
        <div >  
            <h1>We Are The Code Guardians!!!!</h1>
                <img src='https://avatars.githubusercontent.com/u/128388442?v=4' alt="Gaspare Carollo's profile picture" height='200' width='200'/>
                <h2>Gaspare Carollo</h2>
                <p>Currently a Pursuit fellow pursuing a career in the tech industry as a fullstack software developer. Influenced with a creative background in video production, graphic design, and writing, Gaspare is always inspired to explore and reimagine his creativity in various artforms.</p>
                <Link to='https://github.com/Gasparecarollo/'>
                    <h4>Gaspare Carollo's Github</h4>
                </Link>
                <img src="https://avatars.githubusercontent.com/u/131386755?v=4" alt="Jackie Cheung's profile picture" height='200' width='200'/>
                <h2>Jackie Cheung</h2>
                <p>A little something about ourselves</p>
                <Link to='https://github.com/JackieC1993/'>
                    <h4>Jackie Cheung's Github</h4>
                </Link>
                <img src='https://avatars.githubusercontent.com/u/127881507?v=4' alt="Natyka Callwood's profile picture" height='200' width='200'/>
                <h2>Natyka Callwood</h2>
                <p>A little something about ourselves</p>
                <Link to='https://github.com/NatykaC/'>
                    <h4>Natyka Callwood's Github</h4>
                </Link>
                <img src='https://avatars.githubusercontent.com/u/131702936?v=4' alt="Randy Vargas' profile picture" height='200' width='200'/>
                <h2>Randy Antonio Vargas</h2>
                <p>A little something about ourselves</p>
                <Link to='https://github.com/RandyAntonioVargas/'>
                    <h4>Randy Antonio Vargas' Github</h4>
                </Link>
                <img src='https://avatars.githubusercontent.com/u/126502714?v=4' alt="Xavier Rice's profile picture" height='200' width='200'/>
                <h2>Xavier Rice</h2>
                <p>A little something about ourselves</p>
                <Link to='https://github.com/Xavierrice/'>
                    <h4>Xavier Rice's Github</h4>
                </Link>

          <footer> 10.1 - Code Guardians 2023© </footer>

    </div>
       <Footer/>
       </>
    )
}

export default AboutPage;
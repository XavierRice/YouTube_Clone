import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './AboutPage.css'
import Header from "./Header";

const AboutPage = () => {
    return (
        <>
        <Header/>
            <div >
                <h1>We Are The Code Guardians!!!!</h1>
                <img src='https://avatars.githubusercontent.com/u/128388442?v=4' alt="Gaspare Carollo's profile picture" height='200' width='200' />
                <h2>Gaspare Carollo</h2>
                <p>Currently a Pursuit fellow pursuing a career in the tech industry as a fullstack software developer. Influenced with a creative background in video production, graphic design, and writing, Gaspare is always inspired to explore and reimagine his creativity in various artforms.</p>
                <Link to='https://github.com/Gasparecarollo/'>
                    <h4>Gaspare Carollo's Github</h4>
                </Link>
                <img src="https://avatars.githubusercontent.com/u/131386755?v=4" alt="Jackie Cheung's profile picture" height='200' width='200' />
                <h2>Jackie Cheung</h2>
                <p>Hi there! I am a software fellow in Pursuit with a background in Community Health Education. I have always been passionate about using technology to make a positive impact on the world, and I believe that technology will change the way we think and use in our daily life.</p>
                <Link to='https://github.com/JackieC1993/'>
                    <h4>Jackie Cheung's Github</h4>
                </Link>
                <img src='https://avatars.githubusercontent.com/u/127881507?v=4' alt="Natyka Callwood's profile picture" height='200' width='200' />
                <h2>Natyka Callwood</h2>
                <p>Hey!! I am currently a Pursuit fellow, training in Full Stack Web Development. My tenacious, detail oriented, compassionate, and fun loving nature has led me to seek a career in Software Engineering. I hope to take my skills and passions to help develop apps and programs that improve our daily lives and especially improve the lives of those with physical disabilities.</p>
                <Link to='https://github.com/NatykaC/'>
                    <h4>Natyka Callwood's Github</h4>
                </Link>
                <img src='https://avatars.githubusercontent.com/u/131702936?v=4' alt="Randy Vargas' profile picture" height='200' width='200' />
                <h2>Randy Vargas</h2>
                <p>Hey whats up! I`m currently a fullstack web development fellow in Pursuit with a background in lingustics and Health Care. I have always been passionate/weird about technology  and using it to make a change in the world, I believe that technology will change the way humanity lives and how we interact with the natural and technical world itself.</p>
                <Link to='https://github.com/RandyAntonioVargas/'>
                    <h4>Randy Vargas' Github</h4>
                </Link>
                <img src='https://avatars.githubusercontent.com/u/126502714?v=4' alt="Xavier Rice's profile picture" height='200' width='200' />
                <h2>Xavier Rice</h2>
                <p>Hello! 🖖🏾 I'm X! A Pursuit Fellow, currently mastering the art of crafting advanced web applications using React, JavaScript (ES6), HTML5, CSS3, Express, PostgreSQL, APIs, and Git 🚀. My commitment to learning is unwavering, stemming from my background as a creative storyteller who excels in creating connections and sharing impactful narratives 🗣️🎭.
                </p>
                <Link to='https://github.com/Xavierrice/'>
                    <h4>Xavier Rice's Github</h4>
                </Link>
            </div>
            
        </>
    )
}

export default AboutPage;
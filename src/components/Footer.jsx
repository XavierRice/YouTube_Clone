import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Footer = () => {

    return (

        <footer>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-danger fixed-bottom' style={{ height: '2rem' }}>
                <Link to="/" >
                    <a>Home</a>
                </Link>
                <a>Something Cool</a>
                <p>Copywright <strong>Our Group 2023</strong> </p>
            </section>
            <Routes>
                <Route path='/' />
            </Routes>

        </footer>

    )


};

export default Footer;
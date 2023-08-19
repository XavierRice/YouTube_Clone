import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa"
import "./Searchbar.css"

const Searchbar = () => {

    const [input, setInput] = useState("")

    const fetchData = (value) => {

        fetch("#API").then((response) => response.json()).then((json) => {
            const results = json.filter((user) => {

                return value && user && user.name && user.name.toLowerCase().includes(value)
            });
            console.log(results);
        });


    };

    const handleChange = (value) => {

        setInput(value)
        fetchData(value)
    }

    return (

        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Type to search..." value={input} onChange={(e) => setInput(e.target.value)} />


        </div>
    )
}



export default Searchbar;
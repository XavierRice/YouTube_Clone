import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../components/SearchBar.css"



const SearchBar = ({ searchKey, setSearchKey }) => {

    const [search, setSearch] = useState("");
    const [searchArray, setSearchArray] = useState([])

    console.log("this is my search", search, "This is the Search Array", searchArray)

    function handleSearch(e) {
        setSearch(e.target.value)
    };

    function handleSubmit(e) {
        e.preventDefault();
        setSearchKey(search)
        setSearchArray([...searchArray, search])
        setSearch("")
    };


    return (
        <div expand="lg" className="fixed" style={{ height: '4rem', backgroundColor: "red", border: "1px solid black" }} >
            <FaSearch id="search-icon" />
            <form onSubmit={handleSubmit}>
                <input
                    id={searchKey}
                    style={{ width: '44rem', height: "2rem", padding: "10px 5px 5px", marginTop: "13px", border: "1px solid black" }}
                    type="text"
                    name="searchBar"
                    value={search}
                    onChange={handleSearch}
                    placeholder="search for your favorite artist!"
                />
                <button href="#" className="btn btn-primary" type="submit" style={{ marginLeft: '3rem' }}> Search</button>
            </form>
        </div>
    )
    {/* Search history goes here maybe? */ }
}

export default SearchBar;
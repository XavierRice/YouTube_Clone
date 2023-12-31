import { useState } from "react";
import { FaSearch} from 'react-icons/fa'

const SearchBar = ({ searchKey, setSearchKey }) => {

    const [search, setSearch] = useState("");
    const [searchArray, setSearchArray] = useState([])

    function handleSearch(e) {
        setSearch(e.target.value)
    };

    function handleSubmit(e) {
        e.preventDefault();
        setSearchKey(search)
        setSearchArray([...searchArray, search])         // using the spread op to add the search into the array. As a stretch goal we were working towards listing out the seach histroy but we didnt have time to organize it.
        setSearch("")
    };

    return (
        <div expand="lg" className="fixed" style={{ height: '4rem', backgroundColor: "red", border: "1px solid black" }} >  {/* we did a combination of inline styling and css along with bootstrap*/}
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
                <button href="#" className="btn btn-primary" type="submit" style={{ marginLeft: '3rem' }}> 
                <FaSearch id="search-icon"/>
                </button>
            </form>
           
        </div>
    )
};

export default SearchBar;
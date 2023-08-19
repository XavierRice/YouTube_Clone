import { useState } from "react";



const SearchBar = ({ searchKey, setSearchKey }) => {

    const [search, setSearch] = useState("");
    const [searchArray, setSearchArray] = useState([])

    console.log("this is my search", search, "This is the array", searchArray)

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
        <form onSubmit={handleSubmit}>
            <input
                id={searchKey}
                style={{ width: '44rem' }}
                type="text"
                name="searchBar"
                value={search}
                onChange={handleSearch}
                placeholder="enter search ie- Beyonce or Tina+Turner"
            />
            <button href="#" className="btn btn-primary" type="submit"> Search</button>
        </form>
    )




}

export default SearchBar;
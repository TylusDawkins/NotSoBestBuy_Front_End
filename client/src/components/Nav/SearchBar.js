import React from "react";
import '../../styles/SearchBar.css'
const SearchBar = ({placeholder, data}) => {
    return (
        <div className="search">
            <div className="searchInput">
            <input type='text' placeholder={placeholder}/>
            <div className="searchIcon"><i className="fa-solid fa-magnifying-glass"></i></div>
            </div>
            <div className="searchResponse"></div>
        </div>
    );
}

export default SearchBar;
import React from "react";
import '../../styles/SearchBar.css'
import {useState, useEffect, useContext} from "react";
import { SearchValueContext, SearchResultsContext} from '../SearchContext';
import products from '../../data/products'


const SearchBar = ({placeholder, data}) => {
    const {searchValue, setSearchValue} = useContext(SearchValueContext)
    const {SearchResults, setSearchResults} = useContext(SearchResultsContext)
    return (
        <div className="search">
            <div className="searchInput">
            <input type='text' placeholder={placeholder}/>
            <div className="searchIcon">
            <button onClick={() => setSearchResults(products)}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            </div>
            </div>
            <div className="searchResponse"></div>
        </div>
    );
}

export default SearchBar;
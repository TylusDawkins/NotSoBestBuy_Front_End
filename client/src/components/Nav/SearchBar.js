import React from "react";
import '../../styles/SearchBar.css'
import {useState, useEffect, useContext} from "react";
import { SearchValueContext, SearchResultsContext, SearchingContext} from '../SearchContext';
import products from '../../data/products'
import { Link } from "react-router-dom";


const SearchBar = ({placeholder}) => {
    const {searchValue, setSearchValue} = useContext(SearchValueContext)
    const {SearchResults, setSearchResults} = useContext(SearchResultsContext)
    const [searching, setSearching] = useState("")

    const handleChange = (e) => {
        let searchPrompt = e.target.value
        setSearching(searchPrompt)
        console.log(e.target.value)
        let newSearch = products.filter((product) => {
            return product.Name.toLowerCase().includes(searchPrompt.toLowerCase())
        })
        console.log(newSearch)
        if (searchPrompt === "") {
            setSearchValue([])
        }
        else {
            setSearchValue(newSearch)
        }
        console.log(searchValue)
    }

    const handleClick = () => {
        setSearchResults(searchValue)
        setSearchValue([])
        setSearching("")
    }

    
    return (
        <div className="search">
            <div className="searchInput">
            <div className="predictiveSearch">
            <input type='text' placeholder={placeholder} value={searching}onChange={handleChange}/>
            {searchValue.length !==0  && (<div className="suggestions">
            {searchValue.slice(0, 5).map((product) => (
                <p>{product.Name}</p>
            ))}
            </div>)}
            </div> 
            <div className="searchIcon">
            <Link to="/search">
            <button onClick={handleClick}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            </Link>
            </div>
            </div>
            <div className="searchResponse"></div>
        </div>
    );
}

export default SearchBar;
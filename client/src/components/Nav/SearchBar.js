import React from "react";
import '../../styles/SearchBar.css'
import {useState, useEffect, useContext} from "react";
import { SearchValueContext, SearchResultsContext, SearchingContext} from '../SearchContext';
import products from '../../data/products'
import { useNavigate } from "react-router-dom";


const SearchBar = ({placeholder}) => {
    let navigate = useNavigate()
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
        if (searchValue.length === 0) {
            navigate('/deals')
        }
        else {
        setSearchResults(searchValue)
        setSearchValue([])
        setSearching("")
        navigate('/search')}
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
            <button onClick={handleClick}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            </div>
            </div>
            <div className="searchResponse"></div>
        </div>
    );
}

export default SearchBar;
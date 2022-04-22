import React from "react";
import '../../styles/SearchBar.css'
import {useState, useEffect, useContext} from "react";
import { SearchValueContext, SearchResultsContext, SearchingContext} from '../SearchContext';
import products from '../../data/products'
import { useNavigate } from "react-router-dom";
import axios from "axios";

//attention

const SearchBar = ({placeholder}) => {
    let navigate = useNavigate()
    const [productList, setProductList] = useState([])
    const {searchValue, setSearchValue} = useContext(SearchValueContext)
    const {SearchResults, setSearchResults} = useContext(SearchResultsContext)
    const [searching, setSearching] = useState("")

    
    useEffect(() => {
        const getProducts = async () => {
            const product = await axios.get('http://localhost:3001/product')
            setProductList(product.data)
        }
        getProducts()
        
    }, [])


    const handleChange = (e) => {

        let searchPrompt = ""
        if (e.target.value.length !== 0 ){
            searchPrompt = e.target.value
        }
        else if (e.target.innerHTML.length !== 0) {
            searchPrompt = e.target.innerHTML
        }
        setSearching(searchPrompt)

        let newSearch = productList.filter((product) => {
            return product.name.toLowerCase().includes(searchPrompt.toLowerCase())

        })
        if (searchPrompt === "") {
            setSearchValue([])
        }
        else {
            setSearchValue(newSearch)
        }
    }

    const handleClick = () => {
        if (searchValue.length === 0) {
            navigate('/deals')
        }
        else {
        setSearchResults(searchValue)
        setSearchValue([])
        setSearching("")
        navigate('/search/0/0')}
    }

    return (
        <div className="search">
            <div className="searchInput">
            <div className="predictiveSearch">
            <input type='text' placeholder={placeholder} value={searching} onChange={handleChange}/>
            {searchValue.length !==0  && (<div className="suggestions">
            {searchValue.slice(0, 5).map((product) => (
                <button onClick={handleChange}>{product.name.substring(0, 20)}</button>
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
import React, {useState, useEffect, useContext} from "react";
import { SearchResultsContext, SearchValueContext } from "../components/SearchContext";
import Products from "../components/Products";
import { Link } from "react-router-dom";
import "../styles/Product.css"

const SearchResults = () => {

const {searchValue, setSearchValue} = useContext(SearchValueContext)
const {searchResults, setSearchResults} = useContext(SearchResultsContext)

    return (
        <div className="container">
            <h1>Search Results</h1>
            <div className="searchResults">
                {searchResults.length !==0 && searchResults.map((value) => (
                    <div className="product-container" >
                        <Link to={`/product/${value.id}`}>
                        <Products
                            key={value.id}
                            Name={value.Name}
                            Image={value.Image}
                            Price={value.Price}/>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchResults;
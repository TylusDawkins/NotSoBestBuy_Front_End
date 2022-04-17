import React, {useState, useEffect, useContext} from "react";
import { SearchResultsContext, SearchValueContext } from "../components/SearchContext";
import Products from "../components/Products";

const SearchResults = () => {

const {searchValue, setSearchValue} = useContext(SearchValueContext)
const {searchResults, setSearchResults} = useContext(SearchResultsContext)

    return (
        <div className="container">
            <h1>Search Results</h1>
            <div className="searchResults">
                {searchResults.length !==0 && searchResults.map((value) => (
                    <div>
                        <Products 
                            Name={value.Name}
                            Image={value.Image}
                            Price={value.Price}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchResults;
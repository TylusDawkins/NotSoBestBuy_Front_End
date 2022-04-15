import React, {useState, useEffect, useContext} from "react";
import { SearchResultsContext, SearchValueContext } from "../components/SearchContext";

const SearchResults = () => {

const {searchValue, setSearchValue} = useContext(SearchValueContext)
const {searchResults, setSearchResults} = useContext(SearchResultsContext)

    return (
        <div>
            <h1>Search Results</h1>
            {/* <h2>{searchValue}</h2> */}
            <ul className="searchResults">
                {searchResults.length !==0 && searchResults.map((value) => (
                    <li>{value.Name}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;
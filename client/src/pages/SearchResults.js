import React, {useState, useEffect} from "react";


const SearchResults = () => {

const [searchQuery, setSearchQuery] = useState('')
const [searchResults, setSearchResults] = useState([])
const [searching, setSearching] = useState(false)

// useEffect(() => )
    return (
        <div>
            <h1>Search Results</h1>
            <section className="searchResults">

            </section>
        </div>
    );
}

export default SearchResults;
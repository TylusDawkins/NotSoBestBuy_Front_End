import React, {useState, useEffect, useContext} from "react";
import { SearchResultsContext, SearchValueContext } from "../components/SearchContext";
import Products from "../components/Products";
import { Link, useParams } from "react-router-dom";
import "../styles/Product.css"
import Filter from '../components/Filter'
import '../styles/SearchResults.css'


const SearchResults = () => {

const {searchValue, setSearchValue} = useContext(SearchValueContext)
const {searchResults, setSearchResults} = useContext(SearchResultsContext)

let {id} = useParams()
const [catfilteredResults, setCatFilteredResults] = useState([])
useEffect(() => {
    let filtering = searchResults.filter((results) => {
        return results.Category_id === parseInt(id)
    })
    setCatFilteredResults(filtering)
}, [id])
console.log(searchResults)
console.log(catfilteredResults)
    return (
        <div className="container">
            <div>

            <Filter
                searchResults={searchResults}/>
            </div>
            <div className="searchResults">
            <h1>Search Results</h1>
                {id==="0" && searchResults.length !==0 && searchResults.map((value) => (
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

                {catfilteredResults.length !==0 && catfilteredResults.map((value) => (
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
import React, {useState, useEffect, useContext} from "react";
import { SearchResultsContext, SearchValueContext } from "../components/SearchContext";
import Products from "../components/Products";
import { Link } from "react-router-dom";
import "../styles/Product.css"
import Filter from '../components/Filter'
import '../styles/SearchResults.css'

const SearchResults = () => {

const {searchValue, setSearchValue} = useContext(SearchValueContext)
const {searchResults, setSearchResults} = useContext(SearchResultsContext)
const [categoryFilter, setCategoryFilter] = useState([])
const [categoryButton, toggleCategoryButton] = useState(false)
const [priceFilter, setPriceFilter] = useState([])
const [priceButton, togglePriceButton] = useState(false)

// const categorySelect = () => {
//     if (categoryButton) {
//         setCategoryFilter(searchResults.filter((category) => {
//             return category.Category_name === 
//         }))
//     }
// }

    return (
        <div className="container">
            <div>

            <Filter
                toggleCategoryButton={toggleCategoryButton}
                togglePriceButton={togglePriceButton}
                searchResults={searchResults}/>
            </div>
            <div className="searchResults">
            <h1>Search Results</h1>
                {!categoryButton && !priceButton && searchResults.length !==0 && searchResults.map((value) => (
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
                {/* {categoryButton && searchResults.length !==0 && searchRes} */}
            </div>
            
        </div>
    );
}

export default SearchResults;
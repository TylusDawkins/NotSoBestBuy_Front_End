import React, {useContext} from 'react'
import { SearchValueContext, SearchResultsContext } from '../components/SearchContext';

const Cart = () => {
    const {searchResults, setSearchResults} = useContext(SearchResultsContext)
    return (
        <div>
            <h1>Cart</h1>
            {/* <h2>{searchResults.Name}</h2> */}
        </div>
    );
}

export default Cart;
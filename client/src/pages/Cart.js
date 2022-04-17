import React, {useContext} from 'react'
import { SearchValueContext, SearchResultsContext } from '../components/SearchContext';
import '../styles/Cart.css'
import Summary from '../components/Order/Summary';

const Cart = () => {
    const {searchResults, setSearchResults} = useContext(SearchResultsContext)
    return (
        <div className='cart'>
            
            <div className='order-list'>
            <h2>Your Cart</h2>
            </div>
            <Summary />
        </div>
    );
}

export default Cart;
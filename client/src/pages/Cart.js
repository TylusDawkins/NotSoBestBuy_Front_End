import React, {useContext} from 'react'
import { SearchValueContext } from '../components/SearchContext';

const Cart = () => {
    const {searchValue, setSearchValue} = useContext(SearchValueContext)
    return (
        <div>
            <h1>Cart</h1>
            <h2>{searchValue}</h2>
        </div>
    );
}

export default Cart;
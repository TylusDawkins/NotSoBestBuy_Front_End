import products from "../data/products";
import Products from "./Products";
import { Link } from "react-router-dom";
import { SearchResultsContext, SearchValueContext, CartContext } from "../components/SearchContext";
import React, {useState, useEffect, useContext} from "react";

//attention
const SimilarItems = (props) => {
    const {cartInsert, setCartInsert} = useContext(CartContext)
    let filtered = products.filter((result) => {
        return result.Category_name === props.selectedProductCat && 
                result.id !== props.selectedProductId
    })
    console.log(filtered)
    const addToCartHandler = (value) => {
        setCartInsert(value)
    }
    return (
        <aside className="similar-items">
            <h4>Similar items</h4>
            {filtered.map((value) => (
        <Link to={`/product/${value.id}`}>
            <Products
                key={value.id}
                Name={value.Name}
                Image={value.Image}
                Price={value.Price}details={value}
                addToCart={addToCartHandler}/>
        </Link>
            ))}
        </aside>
    );
}

export default SimilarItems;
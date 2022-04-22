import products from "../data/products";
import Products from "./Products";
import { Link } from "react-router-dom";
import { SearchResultsContext, SearchValueContext, CartContext } from "../components/SearchContext";
import React, {useState, useEffect, useContext} from "react";
import axios from "axios";

//attention
const SimilarItems = (props) => {
    const [productList, setProductList] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            const products = await axios.get('https://notsobestbuyback-end.herokuapp.com/product')
            setProductList(products.data)
        }
        getProducts()

    }, [])
    const {cartInsert, setCartInsert} = useContext(CartContext)
    let filtered = productList.filter((result) => {
        return result.categoryId === props.selectedProductCat && 
                result.id !== props.selectedProductId
    })
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
                Name={value.name}
                Image={value.image}
                Price={value.price}
                details={value}
                addToCart={addToCartHandler}/>
        </Link>
            ))}
        </aside>
    );
}

export default SimilarItems;
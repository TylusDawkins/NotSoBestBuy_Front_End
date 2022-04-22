import { SearchResultsContext, SearchValueContext, CartContext } from "../components/SearchContext";
import { useParams } from "react-router-dom";
import React, { useEffect, useState, useContext } from 'react'
import '../styles/Product.css'
import SimilarItems from "../components/SimilarItems";
import axios from "axios";

//attention
const ProductPage = () => {
    let {id} = useParams()
    const {cartInsert, setCartInsert} = useContext(CartContext)
    const [productList, setProductList] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const [selectedProduct, setSelectedProduct] = useState({})
    const [selectedProductCat, setSelectedProductCat] = useState({})
    
    useEffect(() => {
        const getProducts = async () => {
            const products = await axios.get('https://notsobestbuyback-end.herokuapp.com/product')
            const categories = await axios.get('https://notsobestbuyback-end.herokuapp.com/category')
            setProductList(products.data)
            setCategoryList(categories.data)

        }
        getProducts()

        
        
    }, [])
    
    useEffect(() => {
            const selectProduct = productList.find(
                (product) => product.id === parseInt(id)
                )
            setSelectedProduct(selectProduct)
            
            if (selectedProduct !== undefined) {
            const selectProductCat = categoryList.find(
                (category) => category.id === selectedProduct.categoryId
            )
            setSelectedProductCat(selectProductCat)}
        }, [id, productList, selectedProduct, categoryList])


        const addToCartHandler = (value) => {
            setCartInsert(value)
        }
        return (
            <div>

                {selectedProduct !== undefined && selectedProductCat !== undefined &&
            <div className="details">
                
                <div className="main-item">
                <h2>{selectedProduct.name}</h2>
                <img src={selectedProduct.image} alt={selectedProduct.name}/>
                <p>{selectedProduct.description}</p>
                </div>
                <SimilarItems selectedProductCat={selectedProductCat.name}
                            selectedProductId={selectedProduct.id}/>
                <button onClick={addToCartHandler} className="cart-btn">Add To Cart</button>
                </div>
                }
            </div>
    );
}

export default ProductPage;


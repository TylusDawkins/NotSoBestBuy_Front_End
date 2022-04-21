
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import '../styles/Product.css'
import SimilarItems from "../components/SimilarItems";
import axios from "axios";

//attention
const ProductPage = () => {
    let {id} = useParams()
    
    const [productList, setProductList] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const [selectedProduct, setSelectedProduct] = useState({})
    const [selectedProductCat, setSelectedProductCat] = useState({})
    
    useEffect(() => {
        const getProducts = async () => {
            const products = await axios.get('http://localhost:3001/product')
            const categories = await axios.get('http://localhost:3001/category')
            setProductList(products.data)
            setCategoryList(categories.data)
            // console.log(products)
        }
        getProducts()
        console.log(productList)
        
        
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

        console.log(selectedProduct)
        console.log(selectedProductCat)
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
                
                </div>
                }
            </div>
    );
}

export default ProductPage;


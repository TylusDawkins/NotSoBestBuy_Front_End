import products from "../data/products";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import '../styles/Product.css'

const ProductPage = () => {
    let {id} = useParams()
    const [selectedProduct, setSelectedProduct] = useState('')
    useEffect(() => {
        let selectProduct = products.find(
            (product) => product.id === parseInt(id)
        )
        setSelectedProduct(selectProduct)
        
    }, [])
    return (
        <div className="details">
            <h2>{selectedProduct.Name}</h2>
            <img src={selectedProduct.Image}/>
            <p>{selectedProduct.Description}</p>
        </div>
    );
}

export default ProductPage;


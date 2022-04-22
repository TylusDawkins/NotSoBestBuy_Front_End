import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import Products from './Products';
import '../styles/Dealbar.css'
import axios from 'axios'
import { SearchResultsContext, SearchValueContext, CartContext } from "../components/SearchContext";


const Dealbar = (props) => {
    const {cartInsert, setCartInsert} = useContext(CartContext)
    const [productList, setProductList] = useState([])


    useEffect(() => {
        const getProducts = async () => {
            const products = await axios.get('http://localhost:3001/product')
            setProductList(products.data)
        }
        getProducts()

    }, [])
    let newDeal = productList.filter((product) => {
        return product.categoryId === props.id
    })

    const addToCartHandler = (value) => {
        setCartInsert(value)
    }
    return (
        <div>
            <h4>{newDeal.categoryId}</h4>
        <div className='deal-container'>
            
            {newDeal.map((value) => (
                <div className="dealsbar" >
                <Link to={`/product/${value.id}`}>
                    
                <Products
                    key={value.id}
                    Name={value.name}
                    Image={value.image}
                    Price={value.price}
                    details={value}
                    addToCart={addToCartHandler}/>
                    
                </Link>
            </div>
            ))}
        </div>
        </div>
    );
}

export default Dealbar;
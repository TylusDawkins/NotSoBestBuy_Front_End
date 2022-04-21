import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Products from './Products';
import '../styles/Dealbar.css'
import axios from 'axios'


const Dealbar = (props) => {

    const [productList, setProductList] = useState([])


    useEffect(() => {
        const getProducts = async () => {
            const products = await axios.get('http://localhost:3001/product')
            setProductList(products.data)
            // console.log(products)
        }
        getProducts()

    }, [])
    let newDeal = productList.filter((product) => {
        return product.categoryId === props.id
    })
    console.log(productList)
    console.log(newDeal)
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
                    Price={value.price}/>
                </Link>
            </div>
            ))}
        </div>
        </div>
    );
}

export default Dealbar;
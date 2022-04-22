import React, {useState} from 'react'
import products from '../data/products';
import { Link } from 'react-router-dom';
import Products from './Products';
import '../styles/Dealbar.css'
const Dealbar = (props) => {
    const [dealResults, setDealResults] = useState([])
    let newDeal = products.filter((product) => {
        return product.Category_id === props.id
    })
    
    return (
        <div>
            <h4>{newDeal[1].Category_name}</h4>
        <div className='deal-container'>
            
            {newDeal.map((value) => (
                <div className="dealsbar" >
                <Link to={`/product/${value.id}`}>
                    
                <Products
                    key={value.id}
                    Name={value.Name}
                    Image={value.Image}
                    Price={value.Price}/>
                </Link>
            </div>
            ))}
        </div>
        </div>
    );
}

export default Dealbar;
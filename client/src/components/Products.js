
import '../styles/Product.css'
import { useNavigate } from "react-router-dom";

//attention
const Products = (props) => {
    let navigate = useNavigate()
    const handleClick = (e) => {
        e.preventDefault()
        // navigate('/cart')
        props.addToCart(props.details)
    }
    return (
                <div className="product">
                <img className="small" src={props.Image} alt={props.Name}/>
                <h3>{props.Name}</h3>
                <div>${props.Price}</div>
                <div>
                    <button onClick={handleClick} className="cart-btn">Add To Cart</button>
                </div>
                </div>
    );
}

export default Products;
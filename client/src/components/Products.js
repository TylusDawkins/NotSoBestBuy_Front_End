import products from "../data/products";
import '../styles/Product.css'

const Products = (props) => {
    return (
                <div className="product">
                <img className="small" src={props.Image} alt={props.Name}/>
                <h3>{props.Name}</h3>
                <div>${props.Price}</div>
                <div>
                    <button className="cart-btn">Add To Cart</button>
                </div>
                </div>
    );
}

export default Products;
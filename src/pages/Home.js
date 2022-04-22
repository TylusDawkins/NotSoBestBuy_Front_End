import axios from "axios";
import { useEffect } from "react";
import '../styles/Home.css'
const Home = () => {
    let product
    useEffect(() => {
        const getProduct = async () => {
            let rand = Math.floor(Math.random() * 9)
            console.log(rand)
            const product = await axios.get(`https://notsobestbuyback-end.herokuapp.com/product/${rand}`)
        }
        getProduct()
    }, [])
    console.log(product)
    return (
        <div>

            <h1>Home</h1>
            <h4>Featured</h4>
            {product !== undefined && 
            <div>
                
                <h5>{product.name}</h5>
                <h5>${product.price}</h5>
                <img classname="home-image" src={product.image} alt={product.name}/>
            </div>
                }
        </div>
    );
}

export default Home;

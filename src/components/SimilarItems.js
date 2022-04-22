import products from "../data/products";
import Products from "./Products";
import { Link } from "react-router-dom";

const SimilarItems = (props) => {
    let filtered = products.filter((result) => {
        return result.Category_name === props.selectedProductCat && 
                result.id !== props.selectedProductId
    })
    console.log(filtered)
    return (
        <aside className="similar-items">
            <h4>Similar items</h4>
            {filtered.map((value) => (
        <Link to={`/product/${value.id}`}>
            <Products
                key={value.id}
                Name={value.Name}
                Image={value.Image}
                Price={value.Price}/>
        </Link>
            ))}
        </aside>
    );
}

export default SimilarItems;
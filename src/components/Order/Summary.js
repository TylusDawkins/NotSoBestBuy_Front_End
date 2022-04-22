import { Link } from "react-router-dom";

const Summary = () => {
    return (
        <aside className="summary-list">
            <h2> Cart Items</h2>
            <Link to="/checkout">
                <button>Checkout</button>
            </Link>
        </aside>
    );
}

export default Summary;
import { useNavigate } from "react-router-dom";

const Checkout = ({user, authenticated}) => {
    let navigate = useNavigate()

    return (user && authenticated) ? (
        <div>
            <h1>Checkout</h1>
        </div>
    ): (
        <div className="protected">
            <h3>You must be signed in to checkout</h3>
            <button onClick={() => navigate('/signin')}>Sign in</button>
        </div>
    )
}

export default Checkout;
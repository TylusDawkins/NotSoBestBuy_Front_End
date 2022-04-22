import React, {useState ,useContext, useEffect} from 'react'
import { SearchValueContext, SearchResultsContext, CartContext } from '../components/SearchContext';
import '../styles/Cart.css'
import Summary from '../components/Order/Summary';
import axios from 'axios'
import { useParams } from 'react-router-dom';


const Cart = (props) => {
    let {id} = useParams()
    const {searchResults, setSearchResults} = useContext(SearchResultsContext)
    const {cartInsert, setCartInsert} = useContext(CartContext)
    const [cartItems, setCartItems] = useState([])
    const [click, setClick] = useState(0)

    useEffect(() => {

        if (cartInsert !== undefined && id !== 'undefined') {
            
                const createCart = async () => {
                        const cartData = {
                            name: cartInsert.name,
                            price: cartInsert.price,
                            image: cartInsert.image,
                            description: cartInsert.description,
                            quantity: 1,
                            categoryId: cartInsert.categoryId
                        }
                        await axios.post(`https://notsobestbuyback-end.herokuapp.com/cart/additem/${id}`, cartData)
                    }
                    createCart()
                    setCartInsert()
            }
    },[cartInsert, setCartInsert, id, cartItems])
    
    
    
    const handleUpdateAdd = async (e) => {
        
        let val = e.target.name
        const targeter = cartItems.find((item) => item.id === parseInt(val)
        )

        let quantUpdate = {
            name: targeter.name,
            price: targeter.price,
            image: targeter.image,
            description: targeter.description,
            quantity: (parseInt(targeter.quantity) + 1),
            categoryId: targeter.categoryId
            
        }

        await axios.put(`https://notsobestbuyback-end.herokuapp.com/cart/change/${targeter.id}`, quantUpdate)
        setClick((preval) => {
            return preval + 1})
    }
    const handleUpdateMinus = async (e) => {
        let val = e.target.name
        const targeter = cartItems.find((item) => item.id === parseInt(val)
        )
        let quantUpdate = {
            name: targeter.name,
            price: targeter.price,
            image: targeter.image,
            description: targeter.description,
            quantity: (parseInt(targeter.quantity) - 1),
            categoryId: targeter.categoryId
            
        }
        await axios.put(`https://notsobestbuyback-end.herokuapp.com/cart/change/${targeter.id}`, quantUpdate)
        setClick((preval) => {
            return preval + 1})
    }
    
    const handleDelete = async (e) => {
        let val = e.target.name
        const targeter = cartItems.find((item) => item.id === parseInt(val)
        )
        await axios.delete(`https://notsobestbuyback-end.herokuapp.com/cart/remove/${targeter.id}`)
        setClick((preval) => {
            return preval + 1})
    }
    useEffect(() => {

        const getCart = async () => {
            if (id !== 'undefined'){
                const cartItemList = await axios.get(`https://notsobestbuyback-end.herokuapp.com/cart/${id}`)
                setCartItems(cartItemList.data)
            }
        }
        getCart()
    }, [id, click])

    return (
        <div className='cart'>
            
            <div className='order-list'>
            <h2>Your Cart</h2>
            {cartItems.length !== 0 && cartItems.map((item) => (
                <div>
                <h6>{item.name}</h6>
                <img src={item.image} alt={item.name} />
                <h6> Total: ${parseFloat(item.price) * parseFloat(item.quantity)}</h6>
                <h6>${item.price} X: {item.quantity}</h6>
                <button name={item.id} onClick={handleUpdateAdd}>+</button>
                {item.quantity > 1 && <button name={item.id} onClick={handleUpdateMinus}>-</button>}
                <button name={item.id} onClick={handleDelete}>Remove</button>
                </div>
            ))}
            </div>
            <Summary />
        </div>
    );
}

export default Cart;
import React, {useState ,useContext, useEffect} from 'react'
import { SearchValueContext, SearchResultsContext, CartContext } from '../components/SearchContext';
import '../styles/Cart.css'
import Summary from '../components/Order/Summary';
import axios from 'axios'
import { useParams } from 'react-router-dom';


const Cart = (props) => {
    let {id} = useParams()
    console.log(id)
    const {searchResults, setSearchResults} = useContext(SearchResultsContext)
    const {cartInsert, setCartInsert} = useContext(CartContext)
    const [cartItems, setCartItems] = useState([])
    const [click, setClick] = useState(0)

    console.log(props.user)
    useEffect(() => {
        console.log(cartInsert)
        if (cartInsert !== undefined) {
        const createCart = async () => {
                const cartData = {
                    name: cartInsert.name,
                    price: cartInsert.price,
                    image: cartInsert.image,
                    description: cartInsert.description,
                    quantity: 1,
                    categoryId: cartInsert.categoryId
                }
                await axios.post(`http://localhost:3001/cart/additem/${id}`, cartData)
            }
            createCart()
            setCartInsert()
        }
        else {
            
        }
    },[cartInsert, setCartInsert, id, cartItems])
    
    
    
    const handleUpdate = async (e) => {
        console.log(cartItems)
        let val = e.target.name
        const targeter = cartItems.find((item) => item.id === parseInt(val)
        )
        console.log(targeter)
        let quantUpdate = {
            name: targeter.name,
            price: targeter.price,
            image: targeter.image,
            description: targeter.description,
            quantity: (parseInt(targeter.quantity) + 1),
            categoryId: targeter.categoryId
            
        }
        console.log(quantUpdate)
        await axios.put(`http://localhost:3001/cart/change/${targeter.id}`, quantUpdate)
        setClick((preval) => {
            return preval + 1})
    }
    
    const handleDelete = async (e) => {
        let val = e.target.name
        const targeter = cartItems.find((item) => item.id === parseInt(val)
        )
        await axios.delete(`http://localhost:3001/cart/remove/${targeter.id}`)
        setClick((preval) => {
            return preval + 1})
    }
    useEffect(() => {

        const getCart = async () => {
            const cartItemList = await axios.get(`http://localhost:3001/cart/${id}`)
            setCartItems(cartItemList.data)
            console.log(cartItemList)
        }
        getCart()
    }, [id, click])

    console.log(cartItems)
    return (
        <div className='cart'>
            
            <div className='order-list'>
            <h2>Your Cart</h2>
            {cartItems.length !== 0 && cartItems.map((item) => (
                <div>
                <h6>{item.name}</h6>
                <h6>{item.price}</h6>
                <img src={item.image} alt={item.name} />
                <h6>{item.quantity}</h6>
                <button name={item.id} onClick={handleUpdate}>+</button>
                <button name={item.id} onClick={handleDelete}>Remove</button>
                </div>
            ))}
            </div>
            <Summary />
        </div>
    );
}

export default Cart;
import logo from '../../assets/download.png';
import {Router,Link} from 'react-router-dom';
import './navigation.css';
import React from 'react';
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg';
import axios from 'axios';
import Cart from '../cart/cart'

const Navigation = ()=>{
    const [items,setItems] = React.useState(0);
    const [cartItems,setCartItems] =  React.useState([]);
    const getCartCount = ()=>{
         axios.get("http://localhost:8000/Cart").then(res=> {
             setCartItems(res.data);
             getTotalItems(cartItems)
         });
    }

    const getTotalItems = (cartItems)=>{
        let total = 0;
        console.log(cartItems)
        for(let i in cartItems){
            total = total+ cartItems[i].quantity;
            console.log(cartItems[i].quantity);
        }
        setItems(total);
        return total;
    }
    React.useEffect(()=>{
        getCartCount();
             console.log("i am fired");
    },[]);



    return(

        <div className="nav-bar">
            <div className="home-logo-click">
                <Link to="/home" className="logo-home">
                    <img src={logo} height= "90" width="100"/>
                </Link>
            </div>
            <div className="routes-words">
                <div className="home-click">
                    <Link to="/home" className="home">Home</Link>
                </div>
                <div className="products-click">
                    <Link  to="/products"className="products-route">products</Link>
                </div>
                <div className="cart-click">
                    <Link to="/cart" className="cart-route" element={<Cart/>}>
                      Cart
                    </Link>
                </div>
            </div>
        </div>

    )
}
export default Navigation;
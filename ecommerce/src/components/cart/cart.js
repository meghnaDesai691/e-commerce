import axios from "axios";
import React from "react";
import './cart-styles.css';
import data from '../../shop-data.json';
import {ReactComponent as ShoppingBag} from "../../assets/shopping-bag.svg";



const Cart = ()=>{

      const [cartItems,setCartItems] = React.useState(data.Cart);
      const [total,setTotal] = React.useState(0);
     const [noOfItems,setNoOfItems] = React.useState(0);

    const getTotalItems = ()=>{
        let tot = 0;
        let itot= 0;
        for(let i in cartItems){
            tot=tot+cartItems[i].quantity*cartItems[i].price;
           itot+=cartItems[i].quantity;
        }
        setNoOfItems(itot);
        setTotal(tot);
    }
    React.useEffect(()=>{
        getTotalItems();
    },[cartItems
    ,total]);
    const removeItemFromCart=(item) => {
        const newCart = cartItems.filter((items)=>items.id!==item.id);
        setCartItems(newCart);
        console.log("cart after remove button:",cartItems);
       return newCart;

    }

    const minusItemtoCart = (item)=>{
          console.log("item before",cartItems);
          let cartNow = removeItemFromCart(item);
         const new_cart = cartItems.map((cartItem)=>cartItem.id===item.id
             ? {...cartItem,quantity:cartItem.quantity-1} : cartItem)
        setCartItems(new_cart)

        setCartItems(new_cart.filter((item)=>item.quantity>0));
    }
    const additionItemtoCart = (item)=>{
        const cartNow = removeItemFromCart(item);
        console.log(cartItems);
        const new_cart = cartItems.map((cartItem)=>cartItem.id===item.id
            ? {...cartItem,quantity:cartItem.quantity+1} : cartItem)

        console.log(new_cart);

        setCartItems(new_cart);
        console.log(" the cart now:",cartNow);
    }



      // console.log(cartItems);

      return(
          <div className="cart">
              <span className="cart-count" value={noOfItems}>
              </span>
                { cartItems.length>=1 ? (cartItems.map((item)=> {
                          return (
                              <div className="cart-item-container">
                                    <img src={item.imageUrl} alt={`${item.name}`} height="100" width="100"/>
                                    <div className="item-details">
                                          <span className="name">{item.name}</span>
                                          <span className="price">${item.price}</span>
                                        <div className="add-remove">
                                            <span className="minus" onClick={ ()=>minusItemtoCart(item)}>-</span>
                                            <span className="quantity">{item.quantity}</span>
                                            <span className="addition"onClick={()=>additionItemtoCart(item)}>+</span>
                                        </div>

                                        <button  className="remove-btn"onClick={()=>removeItemFromCart(item)}>X</button>

                                    </div>

                              </div>
                          )
                    })

                    )
                    : (<div style={{fontSize:20,fontWeight:"bold",paddingBottom:"10%"}}>Nothing in your cart :(</div>)

                     }
                <div className="total">

                      <span style={{fontWeight:"bold"}}>Total:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${total}</span>
                </div>
          </div>


      )
}

export default Cart;
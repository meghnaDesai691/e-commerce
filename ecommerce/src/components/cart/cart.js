import axios from "axios";
import React from "react";
import './cart-styles.css';



const Cart = ()=>{
      const [cartItems,setCartItems] = React.useState([]);
      const [total,setTotal] = React.useState(0);
      const getCartItems = ()=>{
            axios.get("http://localhost:8000/Cart")
                .then(res=>{setCartItems(res.data)});
      }
    const getTotalItems = ()=>{
        let tot = 0;
        for(let i in cartItems){
            tot=tot+cartItems[i].price;

        }

        setTotal(tot);
    }
    const removeItemFromCart=(item) => {
          axios.delete(`http://localhost:8000/Cart/${item.id}`,item).then(res=>res.data);
    }
      React.useEffect(()=>{
            getCartItems();
            getTotalItems();
      },[ cartItems,total])


      // console.log(cartItems);

      return(
          <div className="cart">


                { cartItems.length>=1 ? (cartItems.map((item)=> {
                          return (
                              <div className="cart-item-container">
                                    <img src={item.imageUrl} alt={`${item.name}`}/>
                                    <div className="item-details">
                                          <span className="name">{item.name}</span>
                                          <span className="price">${item.price}</span>
                                    </div>
                                  <div className="remove">
                                      <button  className="remove-btn"onClick={()=>removeItemFromCart(item)}>remove X </button>
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
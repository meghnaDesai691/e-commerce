import axios from "axios";
import React from "react";
import cart from '../../shop-data.json';
import './product-card.css';

const ProductCard = ({props})=>{
  const [id,setId] = React.useState(1);
    const AddItemToCart = (item)=>{
        console.log(item);
 const found_item = cart.Cart.find((cartitem)=>cartitem.id==item.id);
 console.log(found_item);
        if(found_item){
            console.log("i am put use me react!")
            axios.put(`http://localhost:8000/Cart/${item.id}`,
                {
                    ...item,
                    quantity:found_item.quantity+1
                }
                ).then(res=>console.log(res.data))
        }
        else{
            axios.post("http://localhost:8000/Cart",{
                ...item,
                quantity:1
            }).then(res=>console.log(res.data));
        }
    }
       return(
           <div className="product-card">
               <div className="item-img">
                   <img src={props.imageUrl} height="250" width="300" alt={props.name}/>
               </div>
                   <span className="title-price" >
                       <div className="title"><span style={{fontWeight:"bold"}}>Item Name:</span>{props.name}</div>
                       <div className="price"><span style={{fontWeight:"bold"}}>Price:</span>${props.price}</div>

                       <button onClick={()=>AddItemToCart(props)}>Add to Cart</button>
                   </span>
           </div>
       )
}

export default ProductCard;
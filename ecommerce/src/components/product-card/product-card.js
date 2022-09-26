import {Button} from "@mui/material";
import axios from "axios";
import React from "react";
import cart from '../../shop-data.json';
import './product-card.css';

const ProductCard = ({props})=>{
  const [id,setId] = React.useState(1);
    const AddItemToCart = (item)=>{
        const new_item = {
            id: cart.Cart.length>=1 ? cart.Cart[cart.Cart.length - 1].id + 1 : 1,
            name:item.name,
            imageUrl:item.imageUrl,
            price:item.price
        }

             axios.post(" http://localhost:8000/Cart/",new_item).then(res=>res.data);


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
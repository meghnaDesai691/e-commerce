import {Button} from "@mui/material";


const ProductCard = (props)=>{

    const AddItemToCart = (item)=>{

    }
       return(
           <div className="product-card">
               <div className="img">
                   <img src={props.img} height="200" width="250" alt={props.title}/>
                   <div className="title-price" >
                       <span className="title">{props.title}</span>
                       <span className="price">{props.price}</span>
                       <Button variant="contained" onClick={()=>AddItemToCart(props)}>Add To Cart</Button>
                   </div>
               </div>
           </div>
       )
}
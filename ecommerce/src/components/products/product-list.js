import ProductCard from "../product-card/product-card";
import axios from "axios";
import React from "react";
import './product-list.css'
const ProductList = ()=>{

    const [products,setProducts] = React.useState([])
    const getProducts=()=> {
         axios.get(" http://localhost:8000/products")
            .then(res => {(setProducts(res.data))});
    }
    React.useEffect(()=>{
        getProducts();
    },[])


    return(
        <div className="products-container">
            <div className="product-head">
                <h2>Shop through your choice!</h2></div>
            <div className="products">{
                products.map((product)=>
                <ProductCard key ={product.id}props={product} />
            )}
            </div>

        </div>
    )
}

export default ProductList;
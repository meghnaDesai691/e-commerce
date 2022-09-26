 import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/c-bimage-1.jpeg';
import img2 from '../../assets/c-bimage-2.avif';
import img3 from '../../assets/c-bimage-3.avif';
import {Fragment} from "react";
import ProductCard from "../product-card/product-card";
import React from "react";
import axios from "axios";
import './home.css';


const Home = ()=>{

    const [best,setBest] = React.useState([]);
    const getBestProducts = ()=>{
        axios.get("http://localhost:8000/BestProducts")
            .then(res=>{setBest(res.data)})
    }
    React.useEffect(()=>{
        getBestProducts();
    },[])
     return(
         <Fragment>
             <div className="carousal">
                 <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false}>
                     <div className="img1">
                         <img src={img3} alt="offer1" height="550" width="400"/>
                     </div>
                     <div className="img2">
                         <img src={img2} alt="offer2" height="550" width="400"/>
                     </div>
                     <div className="img3">
                         <img src={img1} alt="offer3" height="550" width="400"/>
                     </div>
                 </Carousel>
             </div>
             <div className="best-products-container">
                 <div className="best-header">
                     <h2> Some Of Our Best Picks..</h2>
                 </div>
                 <div className="best-products">
                     {best.map((pro)=><ProductCard props={pro}/>)}
                 </div>

             </div>
         </Fragment>

     )
}

export default Home;
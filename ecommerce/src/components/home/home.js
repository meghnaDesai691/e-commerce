 import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/c-bimage-1.jpeg';
import img2 from '../../assets/c-bimage-2.avif';
import img3 from '../../assets/c-bimage-3.avif';
import {Fragment} from "react";


const Home = ()=>{
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
             <div className="best-products">

             </div>
         </Fragment>

     )
}

export default Home;
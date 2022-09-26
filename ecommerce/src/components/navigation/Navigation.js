import logo from '../../assets/download.png';
import {Router,Link} from 'react-router-dom';
import './navigation.css';
import Home from '../home/home';
const Navigation = ()=>{
    return(

        <div className="nav-bar">

                <Link to="/home" className="logo-home">

                    <img src={logo} height= "90" width="100"/>

                </Link>
                <Link to="/home" className="home">

                    Home
                </Link>
               <Link  to="/products"className="products-route">
                  products
               </Link>
               <Link to="/cart" className="cart-route">
               cart
               </Link>


        </div>

    )
}
export default Navigation;
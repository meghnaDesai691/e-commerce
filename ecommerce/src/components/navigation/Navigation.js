import logo from '../../assets/download.png';
import {Link} from 'react-router-dom';
import './navigation.css';
import Home from '../home/home';
const Navigation = ()=>{
    return(
        <div className="nav-bar">
            <ul>
                {/*<Link to="/home" element={<Home/>}>*/}
                {/*    <li className="logo">*/}
                {/*        <img src={logo} height= "100" width="100"/>*/}

                {/*    </li>*/}
                {/*</Link>*/}
                {/*<Link to="/home">*/}
                {/*    <li className="nav-link" >Home</li>*/}
                {/*</Link>*/}
                {/*<Link to="/products">*/}
                {/*    <li className="nav-link">products</li>*/}
                {/*</Link>*/}
                {/*<Link to="/cart">*/}
                {/*   <li className="nav-link">cart</li>*/}
                {/*</Link>*/}
                <li className="logo">
                    <img src={logo} height= "90" width="100"/>
                </li>
                <li className="nav-link" >Home</li>
                <li className="nav-link">products</li>
                <li className="nav-link">cart</li>

            </ul>
        </div>
    )
}
export default Navigation;
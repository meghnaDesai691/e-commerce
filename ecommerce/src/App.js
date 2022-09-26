import './App.css';
import './components/navigation/Navigation'
import Navigation from "./components/navigation/Navigation";
import {Route,Routes} from "react-router-dom";
import Home from './components/home/home';
import ProductList from "./components/products/product-list";
import Cart from './components/cart/cart';
import Footer from "./components/footer/footer";
const App = ()=>{

  return(
      <div className="app">
           <Navigation/>
          {/*<Home/>*/}
          {/*<ProductList/>*/}
          {/*<Cart/>*/}
          <Routes>

              <Route path="/home" index element={<Home/>}></Route>
              <Route path="/products" element={<ProductList/>}></Route>
              <Route path="/cart" element={<Cart/>}></Route>

          </Routes>
         
      </div>
  )
}
export default App;
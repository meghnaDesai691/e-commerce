import './App.css';
import './components/navigation/Navigation'
import Navigation from "./components/navigation/Navigation";
import {Route,Routes} from "react-router-dom";
import Home from './components/home/home';


const App = ()=>{

  return(
      <div className="app">
          <Navigation/>
          <Home/>
          {/*<Routes>*/}
          {/*    <Route path="/home" element={<Home/>}></Route>*/}
          {/*    <Route path="/" element={<Home/>}></Route>*/}
          {/*    <Route path="/home" element={<Home/>}></Route>*/}

          {/*</Routes>*/}
      </div>
  )
}
export default App;
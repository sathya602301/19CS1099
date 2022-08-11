import './App.css';
import MainPage from './Components/HomePage/MainPage';
import NavBar from './Components/NavBar/Navigation';
import DiaplayContent from './Components/DisplayContent/DisplayContent';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Placed from './Components/placed/Placed';
import Signin from "./Components/user/Login";
import Cart from "./Components/Dcb/DisplayContent";
import Cartorder from './Components/Cartorder/PlaceOrder';
import Orderlist from './Components/Orderlis/DisplayContent';
import Deleteorder from './Components/Deleteorder/PlaceOrder';
import Searchorder from './Components/searchorder/PlaceOrder';
import Prof from "./Components/Profile/Profile"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (<>

  <BrowserRouter>
 
 <div className="App">
 <NavBar />
 <Routes>
    <Route exact path="" element={<MainPage />} />
    <Route exact path="/display" element={<DiaplayContent />} />
    <Route exact path="/order/:id" element={<PlaceOrder />} />
    <Route exact path="/orders/:id" element={<Placed />} />
    <Route exact path="/signin/:id" element={<Signin />} />
    <Route exact path="/signin/display" element={<MainPage />} />
    <Route exact path="/cart" element={<Cart />} />
    <Route exact path="/Cartorder/:id/:ids" element={<Cartorder />}/>
    <Route exact path="/Cartorders" element={<Orderlist />}/>
    <Route exact path="/Deleteorder/:id/:ids" element={<Deleteorder />} />
    <Route exact path="/Searchorder/:id" element={<Searchorder />} />
    <Route exact path="/prof" element={<Prof />} />
 </Routes>
 </div>

</BrowserRouter>
  </>
  );
}

export default App;

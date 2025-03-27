import Navbar from "./Components/Navbar/Navbar"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import kid_banner from './Components/Assets/kid_banner.PNG'
import man_banner from './Components/Assets/man_banner.PNG'
import woman_banner from './Components/Assets/woman_banner.PNG'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/mens' element={<ShopCategory banner={man_banner} category="men" />}></Route>
        <Route path='/womens' element={<ShopCategory banner={woman_banner} category="women" />}></Route>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />}></Route>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/login' element={<LoginSignup />}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

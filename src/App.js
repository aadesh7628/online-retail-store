import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar/Nav'
import Home from './Pages/Home';
import Mobiles from './Pages/Mobiles'
import Chairs from './Pages/Chairs'
import { ShopContextProvider } from './context/shop-context';
import { Cart } from './Pages/cart/cart';
import Login from './Components/Login/Login';
import { CustomerOrder } from './Pages/Orders/CustomerOrder';
import ForgotPassword from './Components/Login/ForgotPassword';
import UserProfile from './Pages/User/UserProfile';
import Appliances from './Pages/Appliances';
import Dresses from './Pages/Dress';
import Grocery from './Pages/Grocery';
function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/orders' element={<CustomerOrder/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/forgotpassword' element={<ForgotPassword/>} />
          <Route path='/user/:activepage' element={<UserProfile/>} />
          <Route path='/mobiles' element={<Mobiles />} />
          <Route path='/chairs' element={<Chairs />} />
          <Route path='/appliances' element={<Appliances/>} />
          <Route path='/dress' element={<Dresses/>} />
          <Route path='/grocery' element={<Grocery/>} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;

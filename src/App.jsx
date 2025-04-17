import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductDescPage from './Pages/ProductDescPage'
import AddToCartPage from './Pages/AddToCartPage'
import CheckoutPage from './Pages/CheckoutPage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignUpPage'
import MobilesPage from './Pages/MobilesPage'
import WishListPage from './Pages/WishlistPage'
import LaptopPage from './Pages/LaptopPage'
import TVsPage from './Pages/TVsPage'
import Appliances from './Pages/Appliances';
import Accessories from './Pages/Accessories';



const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDescPage />} />
        <Route path="/cart" element={<AddToCartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mobiles" element={<MobilesPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/laptops" element={<LaptopPage />} />
       
      </Routes>
    </Router>
    </div>
  )
}

export default App

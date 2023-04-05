import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from './component/cart-page/Cart'
import Navbar from './component/Navbar'
import Register from './component/auth/Register'
import Home from './screen/Home'
import DownFooter from './component/footer/down-footer'
import { Provider } from 'react-redux'
import Login from './component/auth/Login'
import AddProduct from './screen/addProduct'

function App() {
  return (
    <>
 
     
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addprodut" element={<AddProduct />} />


          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
      <DownFooter />
    </>
  )
}

export default App

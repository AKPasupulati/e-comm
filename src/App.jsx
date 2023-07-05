import React from 'react'
import Home from './assets/components/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ProductDetail from './assets/components/ProductDetail'
import Contact from './assets/components/Contact'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>

        <nav>
          <Link to="/" className='brand'>
            <img src="https://thumbs.dreamstime.com/b/shopping-basket-buy-sell-logo-vector-red-101315335.jpg" alt="" />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/productdetail/:productId' element={<ProductDetail />} />
        </Routes>
        
        <footer>
          Made with ❤️ @ Achyuth 
        </footer>
      </BrowserRouter>
    </div>
  )
}

export default App
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './landing_page/home/HomePage.jsx'
import Signup from './landing_page/signup/Signup.jsx'
import Login from './landing_page/signup/Login.jsx'
import About from './landing_page/about/AboutPage.jsx'
import Products from './landing_page/products/ProductPage.jsx'
import Pricing from './landing_page/pricing/PricingPage.jsx'
import Support from './landing_page/support/SupportPage.jsx'
import NotFound from './landing_page/NotFound.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Pricing' element={<Pricing />} />
        <Route path='/Support' element={<Support />} /> 
        <Route path='/*' element={<NotFound />} /> 

      </Routes>
    </BrowserRouter>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './screens/App.jsx'
import LandingPage from './screens/LandingPage.jsx'
import ProductDetails from './screens/ProductDetails.jsx'
import About from './screens/About.jsx'
import Categories from './screens/Categories.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Login from './screens/Login.jsx'
import Register from './screens/Register.jsx'
import Profile from './screens/Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<App />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
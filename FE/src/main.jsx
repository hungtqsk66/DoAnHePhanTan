import React from 'react'
import ReactDOM from 'react-dom/client'
import Banner from './components/Banner'
import { BrowserRouter as Router } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import './index.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Container from './components/Container'
import HeaderPage from './components/HeaderPages.jsx'
import DangNhapPage from './DangNhapDangKi/DangNhapPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<DangNhapPage/>} />
        <Route path='/home' element={<Navbar />} />
        <Route path='/home' element={<Banner />} />
        <Route path='/sanpham' element={<HeaderPage name={'San Pham'}/>} />
        <Route path='/tintuc' element={<HeaderPage name={'Tin Tức'}/>} />
        <Route path='/lienhe' element={<HeaderPage name={'Lien He'}/>} />
        <Route path='/home' element={<Container  />} />
        <Route path='/home' element={<Footer />} />
      </Routes>

    </React.StrictMode>
  </Router>

)

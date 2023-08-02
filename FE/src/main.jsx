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

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route path='/' element={<Banner />}/>
        <Route path='/sanpham' element={<HeaderPage name={'San Pham'}></HeaderPage>}/>
        <Route path='/tintuc' element={<HeaderPage name={'Tin Tức'}></HeaderPage>}/>
        <Route path='/lienhe' element={<HeaderPage name={'Lien He'}></HeaderPage>}/>
      </Routes>
        <Container />
        <Footer />
    </React.StrictMode>
  </Router>

)

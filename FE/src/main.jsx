import React from 'react'
import ReactDOM from 'react-dom/client'
import Banner from './components/Banner'
import { BrowserRouter as Router } from "react-router-dom"
import './index.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Container from './components/Container'
import HeaderPages from './components/headerPages.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Banner />
    <HeaderPages name={'Sản Phẩm'} />
    <Container />
    <Footer />
  </React.StrictMode>
)

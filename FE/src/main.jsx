import React from 'react'
import ReactDOM from 'react-dom/client'
import Banner from './components/Banner'
import { BrowserRouter as Router } from "react-router-dom"
import './index.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Container from './components/Container'
import HeaderPage from './components/HeaderPages.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Banner />
    {/* <HeaderPage name={'San Pham'}></HeaderPage>
    <HeaderPage name={'Tin Tức'}></HeaderPage>
    <HeaderPage name={'Lien He'}></HeaderPage> */}
    <Container />
    <Footer />
  </React.StrictMode>
)

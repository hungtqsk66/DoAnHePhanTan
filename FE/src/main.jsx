import ReactDOM from 'react-dom/client'
import Banner from './components/Banner'
import {BrowserRouter as Router}from "react-router-dom"
import './index.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Container from './components/Container'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Navbar />
    <Banner />
    <Container />
    <Footer />
  </Router>
)

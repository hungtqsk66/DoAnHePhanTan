import './cssfile/NavBar.css';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <div className="menu">
                    <div className="logo">
                        <img src="/images/logo.png" alt="" width={'300px'}/>
                    </div>
                    <nav className="navOptions">
                        <Link className="navOption" to="/home">TRANG CHỦ</Link>
                        <Link className="navOption" to="/sanpham">SẢN PHẨM</Link>
                        <Link className="navOption" to="/tintuc">TIN TỨC</Link>
                        <Link className="navOption" to="/lienhe">LIÊN HỆ</Link>
                    </nav>
                </div>
                <div className="searchAndCart">
                    <div className="search">
                        <input type="text" />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <Link className="cart" to='/giohang'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p className="countItems">
                            0
                        </p>
                    </Link>
                </div>
            </div>
        </>
    );
};


export default NavBar;
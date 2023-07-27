import './NavBar.css';

const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <div className="menu">
                    <div className="logo">
                        <img src="/images/logo.png" alt="" width={'300px'}/>
                    </div>
                    <nav className="navOptions">
                        <a className="navOption" href="">TRANG CHỦ</a>
                        <a className="navOption" href="">SẢN PHẨM</a>
                        <a className="navOption" href="">TIN TỨC</a>
                        <a className="navOption" href="">LIÊN HỆ</a>
                    </nav>
                </div>
                <div className="searchAndCart">
                    <div className="search">
                        <input type="text" />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p className="countItems">
                            0
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};


export default NavBar;
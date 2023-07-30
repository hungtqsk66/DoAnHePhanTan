import './cssfile/Footer.css';

function FooterList(prop) {
    return (
        <div className="footerLink">
            <h3><i className="fa-solid fa-lines-leaning"></i>{prop.catalog}</h3>
            <a href={prop.url1}>{prop.title1}</a>
            <a href={prop.url2}>{prop.title2}</a>
            <a href={prop.url3}>{prop.title3}</a>
            <a href={prop.url4}>{prop.title4}</a>
            <a href={prop.url5}>{prop.title5}</a>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <div className="referent">
                <a href=""><i className="fa-brands fa-youtube"></i></a>
                <a href=""><i className="fa-brands fa-instagram"></i></a>
                <a href=""><i className="fa-brands fa-facebook"></i></a>
                <a href=""><i className="fa-brands fa-twitter"></i></a>
            </div>
            <div className="mainFooter">
                <div className="footerLeft">
                    <div className="imageLogo">
                        <img src="images/logo.png" alt="" />
                    </div>
                    <div className="info">
                        <div className="infoAddress infoBox">
                            <i className="fa-solid fa-location-dot"></i>
                            <b>Địa chỉ: </b><p>Hải Châu, Đà Nẵng</p>
                        </div>
                        <div className="infoPhone infoBox">
                            <i className="fa-solid fa-phone-volume"></i>
                            <b>Số Điện Thoại: </b><p>0xxxxxxxxx</p>
                        </div>
                        <div className="infoEmail infoBox">
                            <i className="fa-regular fa-envelope"></i>
                            <b>Email: </b><p>car@gmail.com</p>
                        </div>
                        <div className="infoWorks infoBox">
                            <i className="fa-regular fa-clock"></i>
                            <p>Showroom mở cửa tất cả các ngày trong tuần từ 9h sáng đến 5h tối</p>
                        </div>
                    </div>
                </div>
                <div className="footerRight">
                    <FooterList
                        catalog="MENU"
                        title1="Trang Chủ"
                        url1=""
                        title2="Sản phẩm"
                        url2=""
                        title3="Tin Tức"
                        url3=""
                        title4="Liên Hệ"
                        url4=""
                    />
                    <FooterList
                        catalog="DANH MỤC"
                        title1="Đèn ô tô"
                        url1=""
                        title2="Thiết bị thông minh"
                        url2=""
                        title3="Lốp bánh xe"
                        url3=""
                    />
                    <FooterList
                        catalog="DỊCH VỤ"
                        title1="Tin Tức"
                        url1=""
                        title2="Ý kiến đóng góp"
                        url2=""
                        title3="Hướng dẫn"
                        url3=""
                        title4="Chính sách"
                        url4=""
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
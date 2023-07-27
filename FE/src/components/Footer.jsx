import './Footer.css';


function FooterList(prop) {
    return (
        <div className="footerLink">
            <h3>{prop.catalog}</h3>
            <a href={prop.option1.url}>{prop.option1.title}</a>
            <a href={prop.option2.url}>{prop.option2.title}</a>
            <a href={prop.option3.url}>{prop.option3.title}</a>
            <a href={prop.option4.url}>{prop.option4.title}</a>
            <a href={prop.option5.url}>{prop.option5.title}</a>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <div className="referent">
                <a href="">youtube</a>
                <a href="">instagram</a>
                <a href="">facebook</a>
                <a href="">twiter</a>
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
                        option1={{
                            title: "Trang Chủ",
                            url: ""
                        }}
                        option2={{
                            title: "Sản phẩm",
                            url: ""
                        }}
                        option3={{
                            title: "Tin Tức",
                            url: ""
                        }}
                        option4={{
                            title: "Liên Hệ",
                            url: ""
                        }}
                        option5={{
                            title: "",
                            url: ""
                        }}
                    />
                    <FooterList
                        catalog="DANH MỤC"
                        option1={{
                            title: "Đèn ô tô",
                            url: "#"
                        }}
                        option2={{
                            title: "Thiết bị thông minh",
                            url: "#"
                        }}
                        option3={{
                            title: "Lốp bánh xe",
                            url: "#"
                        }}
                        option4={{
                            title: "",
                            url: ""
                        }}
                        option5={{
                            title: "",
                            url: ""
                        }}
                    />
                    <FooterList
                        catalog="DỊCH VỤ"
                        option1={{
                            title: "Tin Tức",
                            url: ""
                        }}
                        option2={{
                            title: "Ý kiến đóng góp",
                            url: ""
                        }}
                        option3={{
                            title: "Hướng dẫn",
                            url: ""
                        }}
                        option4={{
                            title: "Chính sách",
                            url: ""
                        }}
                        option5={{
                            title: "",
                            url: ""
                        }}
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
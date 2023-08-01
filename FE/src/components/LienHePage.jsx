import './cssfile/LienHePage.css'

const LienHePage = () => {
    return (
        <div className="sections contactBox">
            <div className="leftContact">
                <p><b>Địa chỉ: </b>Hải Châu, Đà Nẵng</p>
                <p><b>Số Điện Thoại: </b>0xxxxxxxxx</p>
                <p><b>Email: </b>car@gmail.com</p>
            </div>
            <div>
                <h4>Gửi thắc mắc cho chúng tôi</h4>
                <form action="mailto:emailid@example.com" method="post" id='formSendMail'>
                    <input type="text" name="" id="txt_name" placeholder="Tên Của Bạn*" required />
                    <div className="emailAndPhone">
                        <input type="email" name="" id="" placeholder="Email*" required />
                        <input type="tel" name="" id="" placeholder="Số Điện Thoại Của Bạn*" required />
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Nội Dung*" required></textarea>
                    <input type="submit" value="Send" />
                </form>
            </div>

        </div>
    );
};

export default LienHePage;
import './cssfile/GioHangPage.css'
const GioHangPage = () => {
    return (
        <div className="sections cartBox">
            <div className="showItemsInCart">
                <div className="titleCart">
                    <p className=""></p>
                </div>
            </div>
            <div className="priceAndPolicy">
                <div className="sumBox">
                    <div className="showTien">
                        <h3>Tổng Tiền:</h3>
                        <h2>Cost</h2>
                    </div>
                    <div className="thanhToan">
                            <p>ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 15 ngày</p>
                            <p>Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</p>
                            <button className='btnThanhToan'>THANH TOÁN</button>
                    </div>
                </div>
                <div className="policy">
                        <h4>Chính sách mua hàng:</h4>
                        <p>Hiện chúng tôi đang áp dụng giao hàng trên toàn quốc</p>
                    </div>
            </div>
        </div>
    );
};

export default GioHangPage;
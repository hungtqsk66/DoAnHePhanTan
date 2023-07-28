import './ListTypeitems.css';

const ListTypeItems = () => {
    return (
        <div className="typeList">
            <h2><i className="fa-solid fa-lines-leaning"></i>DANH MỤC SẢN PHẨM</h2>
            <div className="listContent">
                <div className="listBox">
                    <img src="https://hinhanh.webvua.com/images/item_category/4850/resize/5446001142450.png" alt="" />
                    <a href="">
                        <p>ĐÈN Ô TÔ</p>
                    </a>
                </div>
                <div className="listBox">
                    <img src="https://hinhanh.webvua.com/images/item_category/4850/resize/0113132305311.png" alt="" />
                    <a href="">
                        <p>THIẾT BỊ THÔNG MINH</p>
                    </a>
                </div>
                <div className="listBox">
                    <img src="https://hinhanh.webvua.com/images/item_category/4850/resize/4401005000204.png" alt="" />
                    <a href="">
                        <p>LỐP BÁNH XE</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ListTypeItems;
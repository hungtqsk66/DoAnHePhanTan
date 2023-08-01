import Itemshow from "./Itemshow";
import './cssfile/SanPhamPage.css';

const SanPhamPage = (prop) => {
    return (
        <div className="sections mainBox">
            <div className="leftSanPham">
                <div className="danhMuc">
                    <h3>DANH MUC</h3>
                    <div className="danhMucList">
                        <a href="">Den o to</a>
                        <a href="">Thiet Bi Thong Minh</a>
                        <a href="">Lop Banh xe</a>
                    </div>
                </div>
                <div className="sanPhamMoi">
                    <h3>San Pham Moi</h3>
                </div>
            </div>
            <Itemshow prop={prop} />
        </div>
    );
};

export default SanPhamPage;
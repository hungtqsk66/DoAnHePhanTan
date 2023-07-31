import Itemshow from "./Itemshow";
import './cssfile/SanPhamPage.css';

const SanPhamPage = (prop) => {
    console.log(prop);
    return (
        <div className="sections mainBox">
            <div className="leftSanPham">
                <div className="danhMuc">
                    <h3>DANH MUC</h3>
                    <div className="danhMucList">
                        <p>Den o to</p>
                        <p>Thiet Bi Thong Minh</p>
                        <p>Lop Banh xe</p>
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
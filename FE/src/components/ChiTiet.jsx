import { Link } from "react-router-dom";

const item = {
    product_id: '1',
    product_name: 'san pham 1',
    price: '190000',
    status: '200',
    description: 'mô tả gì đó cũng được k biết',
    category: 'den o to',
    image: 'https://hinhanh.webvua.com/images/item/4850/resize/0421242420250.jpg'
}
const ChiTiet = () => {
    return (
        <div className="sections details">
            <div className="mainItem">
                <img src={item.image} alt={item.description} />
                <div className="introItem">
                    <h2>{item.product_name}</h2>
                    <h2 className="priceItem">{item.price}</h2>
                    <div className="controlBuy">
                        <input type="number" name="quantity" min='1'/>
                        <Link className="">Thanh Toan</Link>
                    </div>
                    <p>{item.description}</p>
                </div>
            </div>
            <div className="anotherItems">
                <h2>Sản phẩm mới</h2>
                <div className="newProduct">
                    
                </div>
            </div>
        </div>
    );
};

export default ChiTiet;
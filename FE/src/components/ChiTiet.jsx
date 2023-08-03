import { Link } from "react-router-dom"
import './cssfile/ChiTiet.css'

const item = {
    product_id: '1',
    product_name: 'san pham 1',
    price: '190.000',
    status: '200',
    description: 'mô tả gì đó cũng được k biết',
    category: 'den o to',
    image: 'https://hinhanh.webvua.com/images/item/4850/resize/0421242420250.jpg'
}

const reduceNumber = () =>{
    const quantityItems = parseInt(document.querySelector('.quantityItems').value);
    document.querySelector('.quantityItems').value = quantityItems>1 ? quantityItems-1 : 1;
}
const includeNumber = () =>{
    const quantityItems = parseInt(document.querySelector('.quantityItems').value);
    document.querySelector('.quantityItems').value = quantityItems+1;
}


const ChiTiet = () => {
    return (
        <div className="sections details">
            <img src={item.image} alt={item.description} />
            <div className="introItem">
                <h2>{item.product_name}</h2>
                <h2 className="priceItem">{item.price}đ</h2>
                <div className="controlQuantity">
                    <button className="controlNumber" onClick={reduceNumber}> - </button>
                    <input className="quantityItems" type="number" name="quantity" min='1' defaultValue={'1'} />
                    <button className="controlNumber" onClick={includeNumber}> + </button>
                </div>
                <Link className="btnAddInCart">Thêm vào giỏ hàng</Link>
                <p>{item.description}</p>
            </div>
        </div>
    );
};

export default ChiTiet;
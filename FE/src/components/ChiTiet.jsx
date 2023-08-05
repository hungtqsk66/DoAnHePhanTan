import { Link } from "react-router-dom"
import './cssfile/ChiTiet.css'


const reduceNumber = () =>{
    const quantityItems = parseInt(document.querySelector('.quantityItems').value);
    document.querySelector('.quantityItems').value = quantityItems>1 ? quantityItems-1 : 1;
}
const includeNumber = () =>{
    const quantityItems = parseInt(document.querySelector('.quantityItems').value);
    document.querySelector('.quantityItems').value = quantityItems+1;
}


const ChiTiet = (prop) => {
    const data = prop.prop;
    return (
        <div className="sections details">
            <img src={data.image} alt={data.description} />
            <div className="introItem">
                <h2>{data.product_name}</h2>
                <h2 className="priceItem">{data.price}đ</h2>
                <div className="controlQuantity">
                    <button className="controlNumber" onClick={reduceNumber}> - </button>
                    <input className="quantityItems" type="number" name="quantity" min='1' defaultValue={'1'} />
                    <button className="controlNumber" onClick={includeNumber}> + </button>
                </div>
                <Link className="btnAddInCart">Thêm vào giỏ hàng</Link>
                <p>{data.description}</p>
            </div>
        </div>
    );
};

export default ChiTiet;
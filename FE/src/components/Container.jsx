import './cssfile/Container.css';
import ListTypeItems from './ListTypeItems';
import Itemshow from './Itemshow.jsx';

const data = [
    {
        product_id: '1',
        product_name: 'Product Product Product Product',
        product_image: 'https://hinhanh.webvua.com/images/item/4850/resize/0421242420250.jpg',
        product_price: '190000'
    },
    {
        product_id: '2',
        product_name: 'Product',
        product_image: 'https://hinhanh.webvua.com/images/item/4850/resize/4049002020020.jpg',
        product_price: '190000'
    },
    {
        product_id: '3',
        product_name: ' Product',
        product_image: 'https://hinhanh.webvua.com/images/item/4850/resize/0220222210124.jpg',
        product_price: '190000'
    }
]

const containner = () => {

    return (
        <div className="container">
            <div className="sections">
                <h2><i className="fa-solid fa-lines-leaning"></i>DANH MỤC SẢN PHẨM</h2>
                <ListTypeItems />
            </div>
            <div className="sections">
                <h2><i className="fa-solid fa-lines-leaning"></i>SẢN PHẨM</h2>
                <Itemshow prop = {data}/>
            </div>
        </div>
    );
};

export default containner;
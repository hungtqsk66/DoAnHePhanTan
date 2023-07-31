import './cssfile/Container.css';
import HomePage from './HomePage';
import SanPhamPage from './SanPhamPage';

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
            {/* <HomePage data={data} type={'row'}/> */}
            <SanPhamPage data={data}/>
        </div>
    );
};

export default containner;
import { Routes, Route } from 'react-router-dom';
import './cssfile/Container.css';
import GioHangPage from './GioHangPage';
import HomePage from './HomePage';
import LienHePage from './LienHePage';
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
            <Routes>
                <Route path='/' element={<HomePage data={data} type={'row'} />}/>
                <Route path='/sanpham' element={<SanPhamPage data={data} />}/>
                <Route path='/lienhe' element={<LienHePage />}/>
                <Route path='/giohang' element={<GioHangPage />}/>
                
                
                
                
            </Routes>

        </div>
    );
};

export default containner;
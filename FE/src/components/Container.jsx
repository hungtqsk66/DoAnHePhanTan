import { Routes, Route } from 'react-router-dom';
import './cssfile/Container.css';
import GioHangPage from './GioHangPage';
import HomePage from './HomePage';
import LienHePage from './LienHePage';
import SanPhamPage from './SanPhamPage';
import ChiTiet from './ChiTiet';

const data = [
    {
        product_id: '1',
        product_name: 'san pham 1',
        price: '190000',
        status: '200',
        description: 'mô tả gì đó cũng được k biết',
        category: 'den o to',
        image: 'https://hinhanh.webvua.com/images/item/4850/resize/0421242420250.jpg'
    },
    {
        product_id: '2',
        product_name: 'san pham 2',
        price: '190000',
        status: '200',
        description: 'mô tả gì đó cũng được k biết',
        category: 'thiet bi thong minh',
        image: 'https://hinhanh.webvua.com/images/item/4850/resize/4049002020020.jpg'
    },
    {
        product_id: '3',
        product_name: 'san pham 3',
        price: '190000',
        status: '200',
        description: 'mô tả gì đó cũng được k biết',
        category: 'lop banh xe',
        image: 'https://hinhanh.webvua.com/images/item/4850/resize/0220222210124.jpg'
    }
]

const containner = () => {

    return (
        <div className="container">
            <Routes>
                <Route path='/' element={<HomePage data={data} type={'row'} />}/>
                <Route path='/sanpham' element={<SanPhamPage data={data} />}/>
                <Route path='/lienhe' element={<LienHePage />}/>
                <Route path='/giohang' element={<GioHangPage/>}/>
            </Routes>
            <ChiTiet/>
        </div>
    );
};

export default containner;
import { Routes, Route } from "react-router-dom";
import ChiTiet from "./ChiTiet";


const ChiTietPages = (prop) => {
    const items = prop.data.map(item => {
        console.log(item);
        return (
            <Route path={'/' + (item.category).split(' ').join('') + item.product_id} element={<ChiTiet prop={item}  />} key={item.product_id} />
        );
    })
    console.log(items);
    return (
        <>
            <Routes>
                {items}
            </Routes>
        </>
    );
};

export default ChiTietPages;
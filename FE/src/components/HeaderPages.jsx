import './cssfile/HeaderPages.css'

const HeaderPages = (prop) => {
    return (
        <div className='headerBanner'>
            <h2>{prop.name}</h2>
            <p>Trang chủ {'>'} {prop.name}</p>
        </div>
    );
};

export default HeaderPages;
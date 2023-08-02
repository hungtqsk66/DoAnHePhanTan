import { Link } from "react-router-dom";


const HeaderPages = (prop) => {
    return (
        <div className='headerBanner'
            style={{
                width: '100%',
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                backgroundImage: 'url(https://hinhanh.webvua.com/images/adv/4850/resize/5203444040330.jpg)',
                color: '#fff',
                cursor: 'default'
            }}>
            <h2>{prop.name}</h2>
            <div className="path" style={{display:'flex',flexDirection:'row'}}>
                <Link to='/' style={{color:'#fff',marginRight:'5px'}}>Trang chủ </Link>
                <p>{'>'} {prop.name}</p>
            </div>
        </div>
    );
};

export default HeaderPages;
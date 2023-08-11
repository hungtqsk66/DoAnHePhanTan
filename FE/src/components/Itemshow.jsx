import { Link } from 'react-router-dom';
import './cssfile/Itemshow.css';


const Itemshow = (prop) => {
    const data = prop.prop.data;
    const items = data.map((item) => {
        return (
            <Link to={'/' + (item.category).split(' ').join('') + item.product_id}
                className="itemsBox"
                key={item.product_id} >
                <div className='imageBox'>
                    <img src={item.image} alt="" />
                </div>
                <div className="itemInfo">
                    <h4 className='titleItems'>
                        {item.product_name}
                    </h4>
                    <p>{item.price}</p>
                </div>
            </Link>
        )
    })
    return (
        <div className='salingBox bounderBox' type={prop.prop.type}>
            {items}
        </div>
    );
};

export default Itemshow;
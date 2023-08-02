import { Link } from 'react-router-dom';
import './cssfile/Itemshow.css';


const Itemshow = (prop) => {
    const items = prop.prop.data.map((item) => {
        return (
            <Link to={"/" + (item.category).split(' ').join('') + item.product_id}
                className="itemsBox"
                key={item.product_id} >
                <Link to={"/" + (item.category).split(' ').join('') + item.product_id}>
                    <img src={item.image} alt="" />
                </Link>
                <div className="itemInfo">
                    <h4 className='titleItems'>
                        <Link to={"/" + (item.category).split(' ').join('') + item.product_id}>
                            {item.product_name}
                        </Link>
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
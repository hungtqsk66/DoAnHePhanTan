import './cssfile/Itemshow.css';



const Itemshow = (data) => {
    const items = data.prop.map((item) => {
        return (
            <div className="itemsBox" key={item.product_id} >
                <a href=""><img src={item.product_image} alt=""/></a>
                <div className="itemInfo">
                    <h4 className='titleItems'><a href="">{item.product_name}</a></h4>
                    <p>{item.product_price}</p>
                </div>
            </div>)
    })
    return (
        <div className='salingBox bounderBox'>
            {items}
        </div>
    );
};

export default Itemshow;
import './cssfile/Itemshow.css';



const Itemshow = (prop) => {
    {console.log(prop.prop.type)}
    const items = prop.prop.data.map((item) => {
        return (
            <div className="itemsBox" key={item.product_id} >
                <a href=""><img src={item.product_image} alt=""/></a>
                <div className="itemInfo">
                    <h4 className='titleItems'><a href="">{item.product_name}</a></h4>
                    <p>{item.product_price}</p>
                </div>
            </div>
        )
    })
    return (
        <div className='salingBox bounderBox' type={prop.prop.type}>
            {items}
        </div>
    );
};

export default Itemshow;
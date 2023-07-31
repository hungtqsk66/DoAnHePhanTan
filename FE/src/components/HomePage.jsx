import ListTypeItems from "./ListTypeItems";
import Itemshow from "./Itemshow";

const HomePage = (prop) => {
    return (
        <>
            <div className="sections">
                <h2><i className="fa-solid fa-lines-leaning"></i>DANH MỤC SẢN PHẨM</h2>
                <ListTypeItems />
            </div>
            <div className="sections">
                <h2><i className="fa-solid fa-lines-leaning"></i>SẢN PHẨM</h2>
                <Itemshow prop = {prop}/>
            </div>
        </>
    );
};

export default HomePage;
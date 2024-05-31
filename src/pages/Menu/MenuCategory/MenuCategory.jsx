import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="pt-8">
            {title && <Cover
                img={coverImg}
                title={title}>
            </Cover>}
            <div className="grid md:grid-cols-2 gap-8 my-16 px-28">
                {
                    items?.map(item => <MenuItem
                        key={item._id}
                        item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-2 ">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;
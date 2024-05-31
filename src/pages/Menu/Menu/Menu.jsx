import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'

import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();

    const desserts = menu?.filter(item => item.category === 'dessert');
    const soups = menu?.filter(item => item.category === 'soup');
    const salads = menu?.filter(item => item.category === 'salad');
    const pizzas = menu?.filter(item => item.category === 'pizza');
    const offered = menu?.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover
                img={menuImg}
                title="Our menu">
            </Cover>
            {/* offer */}
            <SectionTitle
                subHeading="---Don't Miss---"
                heading="Today's Offer"></SectionTitle>
            <MenuCategory
                items={offered}></MenuCategory>
            {/* desserts */}
            <MenuCategory
                items={desserts} title="dessert" coverImg={dessertImg}></MenuCategory>
            {/* pizza */}
            <MenuCategory
                items={pizzas} title="pizza" coverImg={pizzaImg}></MenuCategory>
            {/* salad */}
            <MenuCategory
                items={salads} title="salad" coverImg={saladImg}></MenuCategory>
            {/* soup */}
            <MenuCategory
                items={soups} title="soup" coverImg={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;
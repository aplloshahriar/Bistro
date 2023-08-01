
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';


import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/Section Title/SectionTitle';
import MenuCategory from './MenuCategory';



const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title={'our menu'}></Cover>

            <SectionTitle
                subHeading={"---Don't miss---"}
                heading={"Today's Offer"}>
            </SectionTitle>

            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>


            {/* dessert menu items */}
            <MenuCategory items={desserts} title={'Dessert'} img={menuImg}>
            </MenuCategory>

            {/* pizza menu items */}
            <MenuCategory items={pizzas} title={'pizza'} img={pizzaImg}>
            </MenuCategory>

            {/* salad menu items */}
            <MenuCategory items={salads} title={'salad'} img={saladImg}>
            </MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soups} title={'soup'} img={soupImg}>
            </MenuCategory>

        </div>
    );
};

export default Menu;
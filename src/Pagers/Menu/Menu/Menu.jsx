
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from'../../../assets/menu/dessert-bg.jpeg'
import PpopularMenu from '../../Home/PopularMenu/PpopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'our menu'}></Cover>
           
            
        </div>
    );
};

export default Menu;

import { Outlet } from 'react-router-dom';
import Footer from '../Pagers/Shared/Footer/Footer';
import Nav from '../Pagers/Shared/Nav/Nav';
import Category from '../Pagers/Home/category/Category';


const Main = () => {
    return (
        <div>
             <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>

            
        </div>
    );
};

export default Main;
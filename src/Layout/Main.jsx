
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pagers/Shared/Footer/Footer';
import Nav from '../Pagers/Shared/Nav/Nav';
import Category from '../Pagers/Home/category/Category';


const Main = () => {
        const location=useLocation();
        const noHeaderFooter=location.pathname.includes('login');
    return (
        <div>
            { noHeaderFooter || <Nav></Nav>}
            <Outlet></Outlet>
           {noHeaderFooter || <Footer></Footer>}

            
        </div>
    );
};

export default Main;
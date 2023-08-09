
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pagers/Shared/Footer/Footer';
import Nav from '../Pagers/Shared/Nav/Nav';



const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {noHeaderFooter || <Nav></Nav>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}


        </div>
    );
};

export default Main;
import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../hooks/useCart";
import { Helmet } from "react-helmet";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    // todo
    // const isAdmin = true;
    const[ isAdmin] = useAdmin();

    return (

        <div className="drawer lg:drawer-open">
            <Helmet>
                <title>Bistro | Dashboard</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>



            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminhome'><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItem'> <FaUtensils></FaUtensils> Add An Item </NavLink></li>
                            <li><NavLink to='/dashboard/manageItems'><FaWallet></FaWallet>Manage Items</NavLink></li>

                            <li><NavLink to='/dashboard/manageItems'><FaBook></FaBook>Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers>All Users</NavLink></li>


                       

                        </> :

                            <>
                                <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                        <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                    </NavLink>

                                </li>
                            </>

                    }




                    {/* divider */}

                    <div className="divider"></div>

                    {/*   Sidebar content here*/}
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu'> Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'> Order Food</NavLink></li>


                </ul>

            </div>
        </div >
    );
};

export default Dashboard;
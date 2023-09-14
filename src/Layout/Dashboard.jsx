import {  NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from 'react-icons/fa';


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/paymentHistory'><FaWallet></FaWallet>Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                    {/* divider */}

                    <div className="divider"></div>

                    {/*   Sidebar content here*/}
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu'> Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'> Order Food</NavLink></li>


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
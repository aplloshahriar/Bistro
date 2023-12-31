import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';

import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";



const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));

    }
    const navOptions =
        <>
            <li><Link to='/'> Home</Link></li>
            <li><Link to='/menu'> Our Menu</Link></li>
            <li><Link to='/order/salad'> Order Food</Link></li>
            {
                isAdmin ? <li><Link to='/dashboard/adminhome'> Dashboard</Link></li> : <li><Link to='/dashboard/userhome'> Dashboard</Link></li>

            }

            <li>
                <Link to='/dashboard/mycart'>
                    <button className="btn  btn-outline btn-xs border-none" >
                        <FaShoppingCart></FaShoppingCart>
                        {/* carts count on navbar  */}
                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                    </button>
                </Link>
            </li>


            {
                user ?
                    <>
                        <span>
                            <p className="ms-2 mr-2 mt-2">{user?.displayName}</p>

                        </span>


                        <li className="ms-4  ml-2" > <button onClick={handleLogOut}> Logout</button> </li></> :
                    <> <li><Link to='/login'>Login</Link></li></>
            }
        </>
    return (
        <>
            <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


                            {navOptions}


                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">



                        {navOptions}



                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Nav;
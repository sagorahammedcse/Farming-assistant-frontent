import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../../store';
import { loadUser, logout } from '../action/userAction';
import { toast } from 'react-toastify';
import { ListAlt, Logout, PersonOutline, ShoppingCart, } from '@mui/icons-material';

const Navbar = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.user);
    
    const logoutUser = () => {
        dispatch(logout());
        toast.success("সফলভাবে আপনি logout হয়েছেন !")

    }

    useEffect(() => {
        store.dispatch(loadUser());
    }, [])


    const menuItem = [
        {
            id: 1,
            menu: <Link to="/">Home</Link>
        },
        {
            id: 2,
            menu: <Link to="/products">Products</Link>
        },
        {
            id: 3,
            menu: <Link to="/products">Contact</Link>
        },
        {
            id: 4,
            menu: <Link to="/post">Blog</Link>
        },
        {
            id: 5,
            menu: <Link to="/about">About us</Link>
        },
    ]
    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItem.map((item) => (
                                <li key={item.id} className='text-white text-xl font-semibold'>{item?.menu}</li>
                            ))
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-4xl font-bold text-white">Farming Assistant</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        menuItem.map((item) => (
                            <li key={item.id} className='text-white text-xl font-semibold'>{item?.menu}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && isAuthenticated === true ?
                        <>
                            <div className="dropdown dropdown-bottom dropdown-end" style={{ zIndex: 9999 }}>
                                <label tabIndex={0} className="btn m-2"> {user ? user?.name : 'Hi,user'} </label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-5 shadow bg-base-100 rounded-box w-52 gap-12">
                                    <li><Link to="/profile"><PersonOutline /> Profile</Link></li>
                                    <li><Link><ListAlt /> Orders</Link></li>
                                    <li><Link to="/cart">< ShoppingCart/> Cart </Link></li>
                                    <li> <button
                                        onClick={logoutUser}
                                        className='btn btn-primary flex justify-center items-center'
                                    ><Logout /> Logout </button> </li>
                                </ul>
                            </div>
                        </>
                        :
                        <Link to="/login" className="btn btn-secondary">Login</Link>

                }
            </div>
        </div>
    );
};

export default Navbar;
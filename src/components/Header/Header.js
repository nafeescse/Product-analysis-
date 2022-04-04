import React from 'react';
import './Header.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom';
// import Reviews from '../Reviews/Reviews';

const Header = () => {
    return (
        <div className='m-3 '>

            <NavLink  className='mr-3 hover:text-blue-600 hover:font-bold' to="/">Home</NavLink>

            <NavLink  className='mr-3 hover:text-blue-600 hover:font-bold' to="/reviews">Reviews</NavLink>

            <NavLink className=' mr-3 hover:text-blue-600 active:font-bold hover:font-bold'  to="/dashboard">Dashboard</NavLink>

            <NavLink  className='mr-3 hover:text-blue-600 hover:font-bold' to="/blogs">Blogs</NavLink>

            <NavLink className='mr-3 hover:text-blue-600 hover:font-bold' to="/about">About</NavLink>
        </div>
    );
};

export default Header;
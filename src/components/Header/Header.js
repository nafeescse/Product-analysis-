import React from 'react';
import './Header.css'
import { Link, Route, Routes } from 'react-router-dom';
// import Reviews from '../Reviews/Reviews';

const Header = () => {
    return (
        <div className='links m-3 '>
        <Link activeClassName='bg-blue-500' className='mr-3 hover:text-blue-600 hover:font-bold' to="/">HOME</Link>
        <Link activeClassName='border border-b-blue-500' className='mr-3 hover:text-blue-600 hover:font-bold' to="/reviews">REVIEWS</Link>
        <Link activeClassName='border border-b-blue-500' className='mr-3 hover:text-blue-600 hover:font-bold' to="/dashboard">DASHBOARD</Link>
        <Link activeClassName='border border-b-blue-500' className='mr-3 hover:text-blue-600 hover:font-bold' to="/blogs">BLOGS</Link>
        <Link activeClassName='border border-b-blue-500' className='mr-3 hover:text-blue-600 hover:font-bold' to="/about">ABOUT</Link>
    </div>
    );
};

export default Header;
import React from 'react';
import './Header.css'
import { Link, Route, Routes } from 'react-router-dom';
// import Reviews from '../Reviews/Reviews';

const Header = () => {
    return (
        <div className='links m-3 '>
        <Link className='mr-3 hover:text-blue-700' to="/">HOME</Link>
        <Link className='mr-3 hover:text-blue-700' to="/reviews">REVIEWS</Link>
        <Link className='mr-3 hover:text-blue-700' to="/dashboard">DASHBOARD</Link>
        <Link className='mr-3 hover:text-blue-700' to="/blogs">BLOGS</Link>
        <Link className='mr-3 hover:text-blue-700' to="/about">ABOUT</Link>
    </div>
    );
};

export default Header;
import React from 'react';

const Cards = (props) => {
    const {img, sell, month} = props.review;
    return (
        <div className='border border-blue-600 m-4 p-3 rounded-lg'>
            <div className='flex items-center'>
                <img className='mr-2 w-16 h-16 rounded-full ' src={img} alt="" />
                <p>Name: {month}</p>
            </div>
            <p>Price: {sell}</p>
        </div>
    );
};

export default Cards;
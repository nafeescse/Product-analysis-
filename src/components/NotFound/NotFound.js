import React from 'react';
import notfound from '../../notfound.png';

const NotFound = () => {
    return (
        <div>
            <img className='m-0' src={notfound} alt="" />
            <div className='flex justify-center'>
                <button>Go to HOME</button>
            </div>
        </div>
    );
};

export default NotFound;
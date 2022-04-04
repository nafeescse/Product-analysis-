import React from 'react';
import notfound from '../../notfound.png';

const NotFound = () => {
    return (
        <div>
            <div  className='m-10 flex justify-center'>
            <img src={notfound} alt="" />
            </div>
            
            <div className='flex justify-center'>
                <button  className='border-2 border-blue-700 rounded-xl p-2 hover:bg-blue-400 hover:text-white shadow-xl' >Back to Home</button>
            </div>
        </div>
    );
};

export default NotFound;
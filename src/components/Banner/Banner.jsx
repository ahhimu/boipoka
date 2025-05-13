import React from 'react';
import BannerImage from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className='flex justify-around items-center bg-gray-200 p-10 rounded-3xl'> 
                <div className=''>
                    <h1 className='font-semibold text-6xl'>Books to freshen up your bookshelf</h1>
                    <button className='btn mt-12 bg-[#23BE0A] text-white rounded-xl'>View The List</button>
                </div>
                <div className='flex justify-end '>
                    <img className='w-5/6 rounded-2xl mt-20 mb-20'  src={BannerImage} alt="" />
                </div>
        </div>
    );
};

export default Banner;
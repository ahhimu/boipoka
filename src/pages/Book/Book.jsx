import React from 'react';
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';


const Book = ({data}) => {
    // 
    const {bookName, bookId,image,author,rating,category,review,tags,yearOfPublishing} = data;

    return (
      
     <Link to={`/bookDetails/${bookId}`}>
       <div className="border card bg-base-100 w-96 shadow-sm p-6 ">
  <figure className='p-4 bg-gray-200 w-2/3 mx-auto rounded-lg'>
    <img className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
<div className='flex gap-2  items-center' >
         <div className="badge badge-secondary">{tags[0]}</div>
       <div className="badge badge-secondary">{tags[1]}</div>
</div>
    <h2 className="card-title">
      {bookName}
    </h2>
    <p className='text-gray-500'>By: {author}</p>
{/* <p className="max-h-[3em] overflow-auto leading-[1.5em]"> <span className='text-green-400 font-semibold underline'>Review:</span> {review}</p> */}
<div className='border-t-1 border-dashed mt-5' ></div>
    <div className="card-actions justify-between items-center mt-4">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<FaStarHalfStroke />
</div>
    </div>
  </div>
  <small className='text-center font-bold italic text-cyan-400'>Publishing Year:{yearOfPublishing}</small>
       </div>
     </Link>
      
    );
};

export default Book;
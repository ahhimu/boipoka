import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BooksDetails = () => {

    const {id} = useParams();
    const bookId= parseInt(id);
    // console.log(id);
    const data = useLoaderData();
    // console.log(data);
    const singleBook = data.find(book => book.bookId === bookId);
    
    // console.log(singleBook);
    const {bookName,image,author,category,review,tags,yearOfPublishing,rating,publisher,totalPages
} = singleBook;
    // ,author,rating,category,review,tags,yearOfPublishing

    return (
//        <div className="card lg:card-side bg-base-100 shadow-sm mt-10 mb-10">
//   <figure className="h-4/6 w-[425px] mt-20 mb-20 border-2 border-red-500">
//     <img className='p-10 bg-blue-200'
//       src={image}
//       alt="Album" />
//   </figure>
//   <div className="card-body border-4 ml-5 border-red-500 mt-20 mb-20">
//     <h2 className="text-5xl font-bold">{bookName}</h2>
//     <p className='text-2xl'>By: <span className='text-xl text-shadow-amber-950 italic'>{author}</span></p>
//     <div className='border-t-1 border-dashed mt-5'></div>

//     <p className='text-2xl'>{category}</p>
//     <div className='border-t-1 border-dashed mt-5'></div>
//      <p className="max-h-[3em] overflow-auto leading-[1.5em]"> <span className='text-green-400 font-semibold underline'>Review:</span> {review}</p>

//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Listen</button>
//     </div>
//   </div>
// </div>

<div className='flex justify-between items-center gap-5'>
    <div>
       <figure className="h-4/6 w-[425px] mt-20 mb-20  ">
                 <img className='p-10 bg-blue-200 rounded-2xl'
                     src={image}
                    alt="Album" />
        </figure>
    </div>
    <div className=' ml-5  mt-20 mb-20'>
        <h2 className="text-5xl font-bold">{bookName}</h2>
         <p className='text-2xl mt-4'>By: <span className='text-xl text-shadow-amber-950 italic'>{author}</span></p>
         <div className='border-t-1 border-dashed mt-5'></div>
         <p className='text-2xl'>{category}</p>
         <div className='border-t-1 border-dashed mt-5'></div>
          <p className="p-5"> <span className='text-green-400 font-semibold underline'>Review:</span> {review}</p>
        <h3 className='mt-2 mb-2 text-xl'>Tag:<span className='text-green-500'>#{tags[0]}</span><span className='text-green-500'>#{tags[1]}</span></h3>

  <table style={{ borderCollapse: 'collapse', width: '100%' }}>
  <tbody className='text-xl'>
    <tr>
      <td><strong>Number Of Pages:</strong></td>
      <td>{totalPages}</td>
    </tr>
    <tr>
      <td><strong>Publisher:</strong></td>
      <td>{publisher}</td>
    </tr>
    <tr>
      <td><strong>Year Of Publishing:</strong></td>
      <td>{yearOfPublishing}</td>
    </tr>
    <tr>
      <td><strong>Rating:</strong></td>
      <td>{rating}</td>
    </tr>
  </tbody>
</table>



        <div className='flex justify-start items-center gap-5 mt-5'>

  <div className="card-actions justify-end">
    <button className="p-4.5 rounded-xl border border-gray-400 transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:border-[#50B1C9]">
      Read
    </button>
  </div>

  <div>
    <button className="bg-[#50B1C9] text-white p-4.5 rounded-xl transition-all duration-300 hover:bg-[#3a94ab] hover:scale-105">
      Wishlist
    </button>
  </div>

</div>


    </div>
</div>
    );
};

export default BooksDetails;
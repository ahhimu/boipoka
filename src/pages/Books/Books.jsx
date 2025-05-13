import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
// console.log(data);
    return (
        <div>
                <h1 className='text-4xl font-semibold text-center mt-25 mb-12 italic'>Books</h1>
<div  className='mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

<Suspense fallback={<div className='text-center text-2xl font-semibold'>Loading...</div>}>
            {
            data.map((book) => (
        
                    <Book key={book.bookId} data={book}></Book>
                
            ))
        }
</Suspense>

</div>



{/* <Book data={data}></Book> */}
        </div>
    );
};

export default Books;
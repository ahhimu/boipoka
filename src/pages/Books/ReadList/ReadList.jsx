import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStroedBook } from '../../../utility/addToDb';
import Book from '../../Book/Book';

const ReadList = () => {
    const data = useLoaderData();
    const [readList, setReadList] = useState([]);
    const [sort,setSort] = useState("");
     console.log(readList);

     useEffect(() => {
        const storedBookData = getStroedBook();
        // console.log(storedBookData);
        const convertedBookData = storedBookData.map(id=>parseInt(id));
        const myReadList = data.filter(book => convertedBookData.includes(book.bookId));
        setReadList(myReadList);
        // console.log(convertedBookData);

     }, []);

const handleSort = (type)=>{
    setSort(type); 
 if(type==="Pages"){
    const sortedData = [...readList].sort((a, b) => b.totalPages - a.totalPages);
    setReadList(sortedData);
 }
 if(type==="Ratings"){
    const sortedData = [...readList].sort((a, b) => a.rating - b.rating);
    setReadList(sortedData);
 }

 
}



    return (
        <div>
        <details className="dropdown">
  <summary className="btn m-1">Sort By - {sort?sort:""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("Pages")}>Pages</a></li>
    <li><a onClick={()=>handleSort("Ratings")}>Ratings</a></li>
  </ul>
</details>

              <Tabs >
    <TabList>
      <Tab>Read Books {readList.length}</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      {/* <h2>Any content 1</h2> */}
     <div className='mb-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
         {
        readList.map(bok => <Book key={bok.bookId} data={bok}></Book>)
      }
     </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;
const getStroedBook =()=>{
    const storedBookSTR = localStorage.getItem("readList");
    // let book;
    if (storedBookSTR) {
       const storedBookData = JSON.parse(storedBookSTR);
       return storedBookData;
    } else {
        return [];
    }
   

}

const addTStoredDB =(id)=>{
    const storedBookData = getStroedBook();
    if(storedBookData.includes(id)){
        alert("Book already exist");
    }
    else{
        storedBookData.push(id);
        localStorage.setItem("readList", JSON.stringify(storedBookData));
        alert("Book added successfully");
    }
}

export {addTStoredDB,getStroedBook}

import './App.css';

import { useEffect, useState } from 'react';




function App() {
  const [books, setBooks] = useState([{}])

  useEffect (() => {
  
      fetch("/api/books")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setBooks(data)
      })
  },[])

  if (!books.length)
  return <h2>Loading...</h2>
  return (
    <div className="App">
      <h1>Available Books</h1>
      <table>
        {books.map((bookObj,ind)=>{
          return(<tr key = {ind}>
            <td>{bookObj.title}</td>
            <td>{bookObj.author}</td>
          </tr>)
        })}
      </table>
    </div>
  );
}

export default App;

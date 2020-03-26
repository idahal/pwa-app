import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch('https://jsonplaceholder.typicode.com/photos').then (
        response => response.json()
      )
      setData(result)
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <header>
        <h1>Images</h1>
      </header>
      {data.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <img src={item.thumbnailUrl} alt="Logo" />
        </div> 
      ))}
    </div>
  );
}

export default App;

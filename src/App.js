import React from 'react';
import './App.css';
import item from '../src/Images/imageOne.png'

// The app using saved data to work offline
function App() {
 
  return (
    <div className="App">
      <header>
        <h1>Images</h1>
      </header>
      <div>
      <img src={item} alt="Logo" />
      </div>
    </div>
  );
}

export default App;


// If the app fetches data form a API 
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [data, setData] = useState([])

//   useEffect(() => {
//     const fetchData = async() => {
//       const result = await fetch('https://jsonplaceholder.typicode.com/photos').then (
//         response => response.json()
//       )
//       setData(result)
//     }
//     fetchData()
//   }, [])
//   return (
//     <div className="App">
//       <header>
//         <h1>Videos</h1>
//         <h1>Images</h1>
//       </header>
//       {data.map(item => (
//         <div key={item.id}>
//           <p>{item.title}</p>
//           <img src={item.thumbnailUrl} alt="Logo" />
//         </div> 
//       ))}
//     </div>
//   );
// }
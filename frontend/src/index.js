import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import App from './App';
import Create from './Create';
import Join from './Join';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> {/* Define your root route */}
      <Route path="/Create" element={<Create />} />
      <Route path='/Join' element={<Join/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


export default App;
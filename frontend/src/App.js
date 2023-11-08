import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const port = 4000;

function App() {


  const navigate = useNavigate();

  // const handleRegister = () => {
  //   fetch(`http://localhost:${port}/register`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ email: regEmail, password: regPassword }),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error('Registration failed');
  //       }
  //     })
  //     .then((data) => {
  //       setRegMessage(data.message);
  //       setRegEmail('');
  //       setRegPassword('');
  //     })
  //     .catch((error) => {
  //       console.error('Registration error:', error);
  //       setRegMessage('Registration failed. Please try again later.');
  //     });
  // };

  // const handleLogin = () => {
  //   if (!loginEmail || !loginPassword) {
  //     setLoginMessage('Please enter both email and password.');
  //   } else {
  //     fetch(`http://localhost:${port}/login`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email: loginEmail, password: loginPassword }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.success) {
  //           setLoginMessage('Login successful.');
  //           setLoginEmail('');
  //           setLoginPassword('');
  //           navigate('/about-us');
  //         } else {
  //           setLoginMessage('Login failed. Please check your credentials.');
  //         }
  //       })

  
  const handleCreate= () =>{
    navigate('/Create');
  }

  const handleJoin= () =>{
    navigate('/Join');
  }
  return (
    <div className="App">
      <h1>Fassst Chat⏩</h1>
      <button className="button1" onClick={handleCreate}>CREATE</button>
      <button className="button2" onClick={handleJoin}>JOIN</button>
      </div> 
      )
      
}

export default App;
// import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import { createRoot, createElement } from 'react-dom/client'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <h1>Hello World!</h1>
// );

function Car() {
  return (
    <h2>Hi, I am a Car!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './Pro_files/About';
import Contact from './Pro_files/Contact';
// import Contact from './Pro_files/Contact';
const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },{
    path:"/about",
    element:<About />
  },
  {
    path:"/contact",
    element:<Contact />
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

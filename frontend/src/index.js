import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import App from './App';

import ManageTenants from './components/events/ManageTenants';
import ManageEvents from './components/events/ManageEvents';

import ManageRoles from './components/events/ManageRoles';

import UpdateEvent from './components/UpdateEvent';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/manage-events' element={<ManageEvents />} />
      <Route path='/manage-tenants' element={<ManageTenants />} />

      <Route path='/manage-roles' element={<ManageRoles/>}/>

      <Route path='/updatevent/:id' element={<UpdateEvent />} />
      



    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

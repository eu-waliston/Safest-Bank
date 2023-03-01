import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components/home/Home';
import Register from './components/register/Register';
import Account from './components/account/Account';

import RightMenu from './menus/right_menu/RightMenu';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/te" element={<RightMenu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

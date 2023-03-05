import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components/home/Home';
import Register from './components/register/Register';
import Account from './components/account/Account';

//Bank Function Components
import MyCreditCard from './components/bank-functions/credit-card/my-card/MyCreditCard';
import AddCard from './components/bank-functions/credit-card/add-new/AddCard';
import TalkWithUs from './components/bank-functions/talk-with-us/TalkWithUs';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/credit-card" element={<MyCreditCard />} />
          <Route exact path="/new-card" element={<AddCard />} />
          <Route exact path="/talk-with-us" element={<TalkWithUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

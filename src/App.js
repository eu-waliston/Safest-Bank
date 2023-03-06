import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components/home/Home';
import Register from './components/register/Register';
import Account from './components/account/Account';

//Bank Function Components -> Right Navbar
import Privacy from './components/bank-functions/privacy/Privacy';
import EditInfo from './components/bank-functions/privacy/edit-info/EditInfo';
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
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/edit-privacy-info" element={<EditInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

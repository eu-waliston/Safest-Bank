import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Bank Default Imports -> Account & Home
import Home from './pages/home/Home';
import Account from './pages/account/Account';

// Bank Function Components -> Recover & Register
import Register from './pages/register/Register';
import Recover from './pages/recover/Recover';

//Bank Function Components -> Right Navbar
import Privacy from './components/bank-functions/privacy/Privacy';
import EditInfo from './components/bank-functions/privacy/edit-info/EditInfo';
import MyCreditCard from './components/bank-functions/credit-card/my-card/MyCreditCard';
import AddCard from './components/bank-functions/credit-card/add-new/AddCard';
import TalkWithUs from './components/bank-functions/talk-with-us/Talkwithus.Component';

//Bank Function Components -> Left Navbar
import Savings from './pages/savings/Savings';
import Payment from './components/bank-functions/payments/Payment';
import Transfer from './components/bank-functions/transfer/Transfer';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route exact path="/register" element={<Register />} />
          <Route exact path="/recover" element={<Recover />} />

          <Route exact path="/account" element={<Account />} />

          <Route exact path="/credit-card" element={<MyCreditCard />} />
          <Route exact path="/new-card" element={<AddCard />} />

          <Route exact path="/talk-with-us" element={<TalkWithUs />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/edit-privacy-info" element={<EditInfo />} />

          <Route exact path="/savings" element={<Savings />} />
          <Route exact path="/payments" element={<Payment />} />
          <Route exact path="/transfer" element={<Transfer />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

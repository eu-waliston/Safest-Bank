import React from "react";
import "./Savings.Component.css";

import { Link } from "react-router-dom";

const SavingsComponent = () => {
  return (
    <div className="savings__component">
      <div className="top__info">
        <h1 className="top__h1">
          <Link to={"/account"}>
            <i class="bi bi-chevron-left"></i>
          </Link>
          Savings
        </h1>
      </div>

      <img
        src={require("../../images/saves.jpg")}
        alt="saves"
        className="saves"
      />
      <h1 className="savings__h1">SAvings Account</h1>
      <h1 className="savings__cash">$ 15,000.00</h1>

      <div className="op">
        <h1 className="deposit">
          <span className="plus">+</span>
          <i class="fa-solid fa-coins"></i> &nbsp; Cash Deposit
        </h1>
        <h1 className="withdraw">
          <i class="bi bi-coin"></i>&nbsp;&nbsp;&nbsp; Withdraw
        </h1>
      </div>
    </div>
  );
};

export default SavingsComponent;
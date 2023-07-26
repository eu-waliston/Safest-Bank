import React from "react";
import "./Savings.scss";

import { Link } from "react-router-dom";
import LeftMenu from "../../menus/left_menu/LeftMenu";
import RightMenu from "../../menus/right_menu/RightMenu";

const Savings = () => {
  return (
    <>
      <RightMenu />
      <LeftMenu />
      <div className="savings__component">
        <div className="top__info">
          <h1 className="top__h1">
            <Link to={"/account"}>
              <i class="bi bi-chevron-left"></i>
            </Link>
            Savings
          </h1>
        </div>

        <hr className="hr" />
        <img src="./images/saves.jpg" alt="saves" className="saves-img" />
        <h1 className="savings__h1">Savings Account</h1>
        <h1 className="savings__cash">$ 15,000.00</h1>

        <div className="operations--section">
          <h1 className="deposit">
            <span className="plus">+</span>
            <i class="fa-solid fa-coins"></i>
            <h4>Cash Deposit</h4>
          </h1>
          <h1 className="withdraw">
            <i class="bi bi-coin"></i>
            <h4>Withdraw</h4>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Savings;

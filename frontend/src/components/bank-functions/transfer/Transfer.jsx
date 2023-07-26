import React from "react";
import "./Transfer.scss";
import LeftMenu from "../../menus/left_menu/LeftMenu";
import RightMenu from "../../menus/right_menu/RightMenu";
import { Link } from "react-router-dom";

const Transfer = () => {
  return (
    <>
      <RightMenu />
      <LeftMenu />
      <div className="tranfer__section">
        <div className="top__info to__2">
          <h1 className="top__h1">
            <Link to={"/account"}>
              <i class="bi bi-chevron-left"></i>
            </Link>
            transfer
          </h1>
        </div>
        <hr className="hr" />

        <div className="account__pay">
          <div className="pay_balance">
            <p className="pay__balance">balance</p>
            <h3 className="money__pay">R$ 4,180.20</h3>
          </div>
        </div>
        <div className="tranfer__data">
          <img src="./images/trans.png" alt="icon" className="trans__icons" />

          <button className="btn__trans">new operation</button>
        </div>

        <div className="tranfer__hsitory"></div>
      </div>
    </>
  );
};

export default Transfer;

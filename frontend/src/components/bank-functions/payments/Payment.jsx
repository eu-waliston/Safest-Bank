import React from "react";
import "./Payment.css";

import { Link } from "react-router-dom";
import LeftMenu from "../../menus/left_menu/LeftMenu";
import RightMenu from "../../menus/right_menu/RightMenu";

const Payment = () => {
  return (
    <>
      <LeftMenu />
      <RightMenu />
      <div className="payment__component">
        <div className="top__info to__2">
          <h1 className="top__h1">
            <Link to={"/account"}>
              <i class="bi bi-chevron-left"></i>
            </Link>
            Payment
          </h1>

          <div className="account__pay">
            <div className="pay_balance">
              <p className="pay__balance">balance</p>
              <h3 className="money__pay">R$ 4,180.20</h3>
            </div>
          </div>
        </div>

        <div className="principal__itens">
          <div className="principal__iten">
            <img src="./images/water.png" alt="icon" className="pay__icon" />
            <h3 className="pay__function">water</h3>
          </div>

          <div className="principal__iten">
            <img
              src="./images/eletricity.png"
              alt="icon"
              className="pay__icon"
            />
            <h3 className="pay__function">eletricity</h3>
          </div>

          <div className="principal__iten">
            <img src="./images/gas.png" alt="icon" className="pay__icon" />
            <h3 className="pay__function">gas</h3>
          </div>

          <div className="principal__iten">
            <img src="./images/shopping.png" alt="icon" className="pay__icon" />
            <h3 className="pay__function">shopping</h3>
          </div>

          <div className="principal__iten">
            <img src="./images/phone.png" alt="icon" className="pay__icon" />
            <h3 className="pay__function">phone</h3>
          </div>

          <div className="principal__iten">
            <img
              src="./images/credt-card.png"
              alt="icon"
              className="pay__icon"
            />
            <h3 className="pay__function">credit card</h3>
          </div>

          <div className="principal__iten">
            <img
              src="./images/insurance.png"
              alt="icon"
              className="pay__icon"
            />
            <h3 className="pay__function">isnurance</h3>
          </div>

          <div className="principal__iten">
            <img src="./images/mortgage.png" alt="icon" className="pay__icon" />
            <h3 className="pay__function">mortgage</h3>
          </div>

          <div className="principal__iten">
            <img
              src="./images/other-bils.png"
              alt="icon"
              className="pay__icon"
            />
            <h3 className="pay__function">other bils</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;

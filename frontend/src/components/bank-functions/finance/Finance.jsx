import React from "react";
import "./Finance.css";

import LeftMenu from "../../menus/left_menu/LeftMenu";
import RightMenu from "../../menus/right_menu/RightMenu";
import { Link } from "react-router-dom";

const Finance = () => {
  return (
    <>
      <LeftMenu />
      <RightMenu />

      <div className="top__info">
        <h1 className="top__h1">
          <Link to={"/account"}>
            <i class="bi bi-chevron-left"></i>
          </Link>
          Finances
        </h1>
      </div>
      <hr className="hr" />
      <div className="finacne___component">
        <div className="balance">
          <p>your balance</p>
          <h1>R$ 500,000.00</h1>
        </div>
        <div className="infos">
          <h1>check your moment</h1>
          <div className="months">
            <div className="jan">jan</div>
            <div className="feb">feb</div>
            <div className="mar">mar</div>
            <div className="apr">apr</div>
            <div className="mai">mai</div>
          </div>
          <div className="income">
            <h1>income $ 2,200</h1>
          </div>
          <div className="expense">
            <h1>Expanse $ 10,000.00</h1>
          </div>
        </div>
        <div className="history">
          <h1>history</h1>
          <div className="history__itens">
            <div className="history__iten">
              <img
                src="./images/gas.png"
                alt="itens"
                className="histori__img"
              />
              <h1>National Gas $150</h1>
            </div>
            <div className="history__iten">
              <img
                src="./images/insurance.png"
                alt="itens"
                className="histori__img"
              />
              <h1>Safest Security $150</h1>
            </div>
            <div className="history__iten">
              <img
                src="./images/mortgage.png"
                alt="itens"
                className="histori__img"
              />
              <h1>House Deposit $150</h1>
            </div>
            <div className="history__iten">
              <img
                src="./images/eletricity.png"
                alt="itens"
                className="histori__img"
              />
              <h1>Light Price $150</h1>
            </div>
            <div className="history__iten">
              <img
                src="./images/gas.png"
                alt="itens"
                className="histori__img"
              />
              <h1>national gas $150</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finance;

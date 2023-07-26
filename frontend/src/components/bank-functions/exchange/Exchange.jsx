import React from "react";
import "./Exchange.scss";
import { Link } from "react-router-dom";
import LeftMenu from "../../menus/left_menu/LeftMenu";
import RightMenu from "../../menus/right_menu/RightMenu";

const Exchange = () => {
  return (
    <>
      <LeftMenu />
      <RightMenu />
      <div className="top__info to__4">
        <h1 className="top__h1">
          <Link to={"/account"}>
            <i class="bi bi-chevron-left"></i>
          </Link>
          exchange
        </h1>
      </div>
      <hr className="hr" />
      <div className="exchange__component">
        <div className="top__itens">
          <img src="./images/doll.png" alt="icons" className="img__icon" />
          <i class="bi bi-arrow-left-right arrow-separator"></i>
          <img src="./images/eur.png" alt="icons" className="img__icon" />
        </div>

        <div className="main__itens_ex">
          <div className="iten__ex_1">
            <select name="cash" id="cash">
              <option value="DOLL">&#36;</option>
              <option value="DOLL">&euro;</option>
            </select>
            <input type="text" name="quantity" id="quantity" />
          </div>
          <div className="iten__ex_2">
            <h1>Convert to</h1>
          </div>
          <div className="iten__ex_3">
            <select name="cash" id="cash">
              <option value="DOLL">&#36;</option>
              <option value="DOLL">&euro;</option>
            </select>
            <input type="text" name="quantity" id="quantity" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Exchange;

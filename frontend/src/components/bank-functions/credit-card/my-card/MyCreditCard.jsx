import React from "react";
import "./MyCreditCard.css"

import { Link } from "react-router-dom";

import LeftMenu from "../../../menus/left_menu/LeftMenu";
import RightMenu from "../../../menus/right_menu/RightMenu";

const MyCreditCard = () => {
    return (
        <>
            <LeftMenu />
            <RightMenu />
            <div className="card__table">
                <div className="top__info">
                    <h1 className="top__h1"><Link to={"/account"}><i class="bi bi-chevron-left"></i></Link>Credit Card</h1>
                </div>
                <div className="middle__info">
                    <img src={require("../../../images/card.png")}  alt="credit-card" className="credit-card"/>

                    <div className="card__info">
                        <button className="card1">Delete Card <i class="bi bi-trash3"></i></button>
                        <button className="card2"><Link to={"/new-card"} id="Link">New Card <i class="bi bi-plus-lg"></i></Link></button>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default MyCreditCard;
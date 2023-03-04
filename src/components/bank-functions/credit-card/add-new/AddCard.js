import React from "react";
import "./AddCard.css"

import { Link } from "react-router-dom";

import LeftMenu from "../../../menus/left_menu/LeftMenu";
import RightMenu from "../../../menus/right_menu/RightMenu";

const AddCard = () => {
    return (
        <>
            <LeftMenu />
            <RightMenu />

            <div className="newcard__Section">
                <div className="top__info">
                    <h1 className="top__h1"><Link to={"/credit-card"}><i class="bi bi-chevron-left"></i></Link>Add  &nbsp; Card</h1>
                </div>

                <div className="middle__info__new">
                    <img src={require("../../../images/card.png")} alt="credit-card" className="credit-card__new" />

                    <div className="form__container">
                        <label>your name</label>
                        <input type={"text"} />

                        <label>card number</label>
                        <input type={"text"} />


                        <label>exprirate date</label>
                        <input type={"date"} />


                        <label>password</label>
                        <input type={"password"} />


                        <label>phone number</label>

                        <input type={"text"} />



                        <Link className="btn" to={"/credit-card"}>
                            link card
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCard;
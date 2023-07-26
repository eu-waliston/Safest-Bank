import React from "react";
import "./TalkWithUs.scss";

import { Link } from "react-router-dom";

import LeftMenu from "../../menus/left_menu/LeftMenu";
import RighttMenu from "../../menus/right_menu/RightMenu";

const TalkWithUs = () => {
    return (
        <>
            <LeftMenu />
            <RighttMenu />

            <div className="talk__with__us">
                <div className="top__info">
                    <h1 className="top__h1"><Link to={"/account"}><i class="bi bi-chevron-left"></i></Link>Talk With Us</h1>
                </div>
                <div className="chat__container">
                    <div className="chat__input">
                        <div className="chat__controls">

                            <input type={"text"} placeholder="Send Your Message..." />
                            <i class="bi bi-send-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TalkWithUs;
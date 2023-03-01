import React from "react";
import "./RightMenu.css";

const RightMenu = () => {

    const [navbarto, setNavBarTog] = React.useState(true);

    return (
            <div className={ navbarto ?  "RightNav-toggle"  : "RightNav"}>
                <i class="bi bi-gear-fill" onClick={() => setNavBarTog(!navbarto)}></i>
                <h3><i class="nav__items bi bi-shield-lock-fill"></i>privacy</h3>
                <h3><i class="nav__items bi bi-credit-card-2-back-fill"></i>Credit Card</h3>
                <h3><i class="nav__items bi bi-chat-fill"></i>talk with us</h3>
                <h3><i class="nav__items bi bi-box-arrow-right"></i>log out</h3>
            </div>
    )
}

export default RightMenu;
import React from "react";
import "./RightMenu.css";

import { Link } from "react-router-dom";

const RightMenu = () => {

    const [navbarto, setNavBarTog] = React.useState(true);

    return (
        <div className={navbarto ? "RightNav-toggle" : "RightNav"}>
            <i class="bi bi-gear-fill" onClick={() => setNavBarTog(!navbarto)}></i>


            <h3 className={navbarto ? "nav__items-toggle" : ""}>
                <i className="nav__items bi bi-shield-lock-fill"></i>
                privacy
            </h3>
            <h3 className={navbarto ? "nav__items-toggle" : ""}>
                <i className="nav__items bi bi-credit-card-2-back-fill"></i>
                <Link className="link_itens" to={"/credit-card"}>
                    Credit Card
                </Link>
            </h3 >
            <h3 className={navbarto ? "nav__items-toggle" :""}>
                <i className="nav__items bi bi-chat-fill"></i>talk with us
            </h3>
            <h3 className={navbarto ? "nav__items-toggle" :""}>
                <i className="nav__items bi bi-box-arrow-right"></i>
                <Link className="link_itens" to={"/"}>
                    log out
                </Link>
            </h3>

        </div>
    )
}

export default RightMenu;
import React from "react";
import "./LeftMenu.css"

import { Link } from "react-router-dom";

const LeftMenu = () => {
    const [navbar, setNavbar] = React.useState(true);

    return (
        <>
            <i class={navbar ? "bi bi-list style" : "bi bi-x-lg style"} onClick={() => setNavbar(!navbar)}></i>
            <div className={navbar ? "navbar-toggle" : "navbar"}>
                <div className={navbar ? "navbar_itens-toggle" : "navbar_itens"}>
                    <h3>
                        <i class="nav__item bi bi-person" ></i>
                        <Link className="link_itens" to={"/account"}>
                            account
                        </Link>
                    </h3>

                    <h3>
                        <i class="nav__item bi bi-cash-stack"></i>
                        <Link className="link_itens" to={"/loan"}>
                            loan
                        </Link>
                    </h3>

                    <h3>
                        <i class="nav__item bi bi-arrow-left-right"></i>
                        <Link className="link_itens" to={"/transfer"}>
                            transfer
                        </Link>
                    </h3>


                    <h3>
                        <i class="nav__item bi bi-credit-card-2-back"></i>
                        <Link className="link_itens" to={"/payments"}>
                            payments
                        </Link>
                    </h3>

                    <h3>
                        <i class="nav__item bi bi-piggy-bank-fill"></i>
                        <Link className="link_itens" to={"/savings"}>
                            savings
                        </Link>
                    </h3>

                    <h3>
                        <i class="nav__item  bi bi-bar-chart-fill"></i>
                        <Link className="link_itens" to={"/finance"}>
                            finance
                        </Link>
                    </h3>



                    <h3>
                        <i class="nav__item bi-currency-exchange"></i>
                        <Link className="link_itens" to={"/exchange"}>
                            exchange
                        </Link>
                    </h3>
                </div>
            </div>
        </>
    )
}

export default LeftMenu;
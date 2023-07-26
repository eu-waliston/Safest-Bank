import React from "react";
import "./Loan.scss";
import { Link } from "react-router-dom";
import LeftMenu from "../../menus/left_menu/LeftMenu";
import RightMenu from "../../menus/right_menu/RightMenu";

const Loan = () => {
    return (
        <>
            < LeftMenu />
            < RightMenu />
            <div className="top__info">
                <h1 className="top__h1">
                    <Link to={"/account"}>
                        <i class="bi bi-chevron-left"></i>
                    </Link>
                    loan
                </h1>

            </div>
            <hr className="hr" />
            <div className="loan__component">
                <img src="./images/loan.png" alt="loan" className="loan__img" />
                <h1 className="loan__h1">Choose your loan type</h1>
                <div className="all__loans">
                    
                    <div className="loan__type">
                        <h3>PL</h3>
                        <i class="bi bi-person-fill"></i>
                    </div>
                    <i class="fa-solid fa-grip-lines-vertical"></i>
                    <div className="loan__type">
                        <h3>HG</h3>
                        <i class="bi bi-house-door-fill"></i>
                    </div>
                    <i class="fa-solid fa-grip-lines-vertical"></i>
                    <div className="loan__type">
                        <h3>CG</h3>
                        <i class="bi bi-car-front"></i>
                    </div>
                </div>
                <button className="simullate">simulate</button>
            </div>
        </>
    )
}

export default Loan;
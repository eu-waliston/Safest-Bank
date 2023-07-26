import React from "react";
import "./Savings.scss";

import SavingsComponent from "../../components/bank-functions/savings/Savings.Component";

import RightMenu from "../../components/menus/right_menu/RightMenu";
import LeftMenu from "../../components/menus/left_menu/LeftMenu";


const Savings = () => {
    return (
        <div className="Savings-Page">
            <LeftMenu />
            <RightMenu />
            
            <SavingsComponent />
        </div>
    )
}

export default Savings;
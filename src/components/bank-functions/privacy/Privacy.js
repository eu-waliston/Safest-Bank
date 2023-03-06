import React from "react";
import "./Privacy.css"

import { Link } from "react-router-dom";

import LeftMenu from "../../menus/left_menu/LeftMenu";
import RightMenu from "../../menus/right_menu/RightMenu";

const Privacy = () => {
    return (
        <>
            <LeftMenu />
            <RightMenu />
            <div className="privacy__section">
                <div className="top__section">
                    <h1 className="top__h1"><Link to={"/account"}><i class="bi bi-chevron-left"></i></Link>Privacy</h1>
                </div>

                <div className="privacy__info">
                    <h1 className="name">Hi, We Santos.</h1>
                    <div className="personal__info">

                        <p><i class="agency__icons bi bi-bank2"></i><span>Agency -</span> 0000</p>
                        <p><i class="agency__icons bi bi-bank2"></i><span>Accout Number -</span> 00000000-0</p>
                        <p><i class="agency__icons bi bi-person-fill"></i><span>Name -</span> Waliston Waliston Walis...</p>
                        <p><i class="agency__icons bi bi-geo-alt"></i><span>Address -</span> Mumbai, Maharashtra...</p>
                        <p><i class="agency__icons bi bi-telephone-fill"></i><span>Phone -</span> (+00) 0000 00 0000 </p>
                        <p><i class="agency__icons bi bi-envelope"></i><span>Email -</span> wal-wizard@xmail.com</p>
                        <p><i class="agency__icons bi bi-balloon-fill"></i><span>Birthday -</span> 00 April 0000</p>


                    </div>

                    <button className="edit__btn">
                        <Link className="Link" to={"/edit-privacy-info"}>
                            Edit Info
                            <i class="bi bi-pencil-fill ps"></i>
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Privacy;
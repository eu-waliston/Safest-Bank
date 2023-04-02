import React from "react";
import { Link } from "react-router-dom";
import "./EditInfo.css";



const EditInfo = () => {
    return (
        <div className="edit__info__section">
            <div className="top__section">
                <h1 >Edit Personal Info</h1>
            </div>
            <div className="edit__form">
                <label><i class="agency__icons bi bi-bank2"></i><span>Agency</span> </label>
                <input type={"number"} required />

                <label><i class="agency__icons bi bi-bank2"></i><span>Accout Number</span></label>
                <input type={"number"} required />


                <label><i class="agency__icons bi bi-person-fill"></i><span>Name</span></label>
                <input type={"text"} required />


                <label><i class="agency__icons bi bi-geo-alt"></i><span>Address</span></label>
                <input type={"text"} required />


                <label><i class="agency__icons bi bi-telephone-fill"></i><span>Phone</span></label>
                <input type={"number"} required />


                <label><i class="agency__icons bi bi-envelope"></i><span>Email</span></label>
                <input type={"email"} required />


                <label><i class="agency__icons bi bi-balloon-fill"></i><span>Birthday</span></label>
                <input type={"date"} required />


                <div className="finish__buttons">
                    <Link className="bnt_okay" to={"/privacy"}>Save</Link>
                    <Link className="bnt__cancel" to={"/privacy"}>Cancel</Link>
                </div>
            </div>
        </div>
    )
}

export default EditInfo;
import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";


const Home = () => {
    return (

        <div className="home">

            <div className="top__side">
                <h1>SAFEST BANK.</h1>
                <img src={require("../../components/images/logo.png")} alt="logo" className="logo" />
            </div>

            <div className="bottom__side">
                <input type="text" placeholder="Username or Email" required className="login__info" />

                <input type="text" placeholder="Password" required className="login__info" />

                <button className="login">
                    <Link to={"/account"} className="Link-">log in</Link>
                </button>

                <Link to={"/recover"} className="forgot">Forgot Password?</Link>

                <p>New in Safest ? <Link to="/register"className="forgot" >sign in</Link></p>
            </div>
        </div>


    )
}

export default Home;
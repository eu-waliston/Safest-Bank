import React from "react";
import "./home.css";
import { Link } from "react-router-dom";


const Home = () => {
    return (

        <div className="home">

            <div className="top__side">
                <h1>welcome</h1>
                <img src={require("../images/logo.png")} alt="logo" className="logo" />
            </div>

            <div className="bottom__side">
                <input type="text" placeholder="Username or Email" required className="login__info" />
                <br />
                <input type="text" placeholder="Password" required className="login__info" />
                <br />
                <a href={"/account"} className="login"><Link to={"/account"} style={{ textDecoration: "none", color: "#fff" }}>log in</Link></a>
                <br />
                <a href="/" className="forgot">Forgot Password</a>
                <br />
                <p>New in bank app ? <Link to="/register">sign in</Link></p>
            </div>
        </div>


    )
}

export default Home;
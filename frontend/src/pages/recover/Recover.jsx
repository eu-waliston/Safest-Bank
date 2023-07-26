import React from "react";
import { Link } from "react-router-dom";
import "./Recover.scss";

const Recover = () => {
  return (
    <div className="recover__section">
      <h3 className="ff-pass">Forgot your password?</h3>
      <h3 className="ff-worry">
        Don't worry! <i class="bi bi-heart-fill"></i>
      </h3>
      <div className="email_check">
        <label className="email--ss">
          <i class="bi bi-envelope"></i> Email:
        </label>
        <input type={"email"} placeholder="your email.." required />
        <Link to={"/"} className="recovery__btn">
          <p>send</p>
        </Link>
      </div>
    </div>
  );
};

export default Recover;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Recover = () => {
    return (
        <RECOVER>
            <div className="recover__section">
                <h3>Forgot your password?</h3>
                <h3>Don't worry! <i class="bi bi-heart-fill"></i></h3>
                <div className="email_check">
                    <label><i class="bi bi-envelope"></i> Email:</label>
                    <input type={"email"} placeholder="your email.." required />
                    <Link to={"/"} className="recovery__btn">
                        <p>send</p>
                    </Link>
                </div>
            </div>
        </RECOVER>
    )
}

const RECOVER = styled.div`
width: 100%;
height: 100vh;
background-color: #B297E6;

.recover__section {
    display: grid;
    position: relative;
    top: 20%;

    h3 {
        font-size: 1.6rem;
        text-transform: capitalize;
        margin-bottom: 30px;
        text-align: center;
        color: #fff;

        .bi-heart-fill {
            color: red;
        }
    }

    .email_check {
        display: grid;
        width: 70%;
        margin-left: 13%;
        margin-top: 10%;

        label {
            color: #fff;
            font-size: 1rem;

            i {
                font-size: 1.1rem;
            }
        }

        input {
            height: 40px;
            margin-top: 5px;
            margin-bottom: 5px;

            &::placeholder {
                position: relative;
                left: 8px;
                text-transform: capitalize;
            }
        }

        .recovery__btn {
            text-decoration: none;
            text-align: center;
            position: relative;
            top: 20px;
            text-transform: uppercase;
            color: #B297E6;
            background-color: #fff;
            width: 45%;
            height: 40px;
            border-radius: 5px;
            margin-left: 28%;

            p {
                font-size: 1.3rem;
                position: relative;
                top: 5px;
            }
        }
    }
}

`

export default Recover;

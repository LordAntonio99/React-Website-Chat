import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase from "firebase";

import { auth } from "../firebase";

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>WELCOME TO THE REACT CHAT!</h2>
                <div className="login-button google" onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined /> Sign In With Google
                </div>
                <br /> <br />
                <div className="login-button facebook">
                    <FacebookOutlined /> Sign In With Facebook
                </div>
            </div>
        </div>
    )
};

export default Login
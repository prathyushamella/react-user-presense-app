import React from 'react';
import './home.scss'
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import LogInForm from "../../components/log-in-form/log-in-form";

const Home = () => {
    return (
        <div className={"home"}>
            <div className="home-title">User Presence App</div>
            <div className="form-flexbox">
                <SignUpForm/>
                <div className="vertical-divider"> </div>
                <LogInForm/>
            </div>
        </div>
    );
};

export default Home;
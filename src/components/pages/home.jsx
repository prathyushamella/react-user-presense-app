import React from 'react';
import CustomForm from "../custom-form/custom-form";
import './home.scss'
import {FaUser, FaEnvelope, FaKey} from 'react-icons/fa'
const Home = () => {
    const signUpFormFieldData = [
        {
            name: 'firstName',
            placeholder: 'First name',
            FieldIcon: FaUser
        },
        {
            name: 'lastName',
            placeholder: 'Last name',
            FieldIcon: FaUser
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'Email address',
            FieldIcon: FaEnvelope
        }
    ]
    const signUpFormDetails = {
        formClassName: 'sign-up-form',
        formTitle: 'Do not have an account?',
        formSubtitle: 'Sign up with your email and password',
        formButton: 'sign up'
    }
    const signInFormFieldData = [
        {
            name: 'email',
            type: 'email',
            placeholder: 'Email address',
            FieldIcon: FaEnvelope
        }
    ]
    const signInFormDetails = {
        formClassName: 'sign-in-form',
        formTitle: 'Already have an account?',
        formSubtitle: 'Log in with your email and password',
        formButton: 'log in'
    }
    return (
        <div className={"home"}>
            <div className="home-title">User Presence App</div>
            <div className="form-flexbox">
                <CustomForm formDetails={signUpFormDetails} customFormFieldData={signUpFormFieldData}/>
                <CustomForm formDetails={signInFormDetails} customFormFieldData={signInFormFieldData}/>
            </div>
        </div>
    );
};

export default Home;
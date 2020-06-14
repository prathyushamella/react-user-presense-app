import React from 'react';
import { useForm } from "react-hook-form";
import {FaExclamationTriangle, FaEnvelope, FaKey} from "react-icons/fa";
import './log-in-form.scss'
import {auth} from '../../firebase/firebase.utils'


const LogInForm = () => {
    const {handleSubmit, errors, register} = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        const {email, password} = data
        const {user} = await auth.signInWithEmailAndPassword(email, password)
        console.log(user)
    }
    return (
        <div className={"form-container"}>
            <div className="form-title">I already have an account</div>
            <div className="form-subtitle">Login with your details</div>
            <form className={`log-in-form`} onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-fields">
                    <div className={"input-wrapper"+(errors.email?' required':'')}>
                        <div className="input-img-wrapper">
                            <FaEnvelope size='20px' style={{display: 'block'}}/>
                        </div>
                        <input type={'text'}
                               name={'email'}
                               placeholder={'Email address'}
                               ref={register({
                                   required:'This field is required',
                                   pattern: {
                                       value: /^\S+@\S+$/i,
                                       message: 'Not a valid email address'
                                   }
                               })}
                               spellCheck={"false"}/>
                    </div>
                    {errors.email &&
                    <div className={"error"}>
                        <FaExclamationTriangle
                            size='14px'
                            style={{display: 'inline', marginRight: '6px'}}
                        />
                        {errors.email.message}
                    </div>}
                    <div className={"input-wrapper"+(errors.password?' required':'')}>
                        <div className="input-img-wrapper">
                            <FaKey size='20px' style={{display: 'block'}}/>
                        </div>
                        <input type={'password'}
                               name={'password'}
                               placeholder={'Password'}
                               ref={register({
                                   required:'This field is required',
                                   minLength: {
                                       value: 8,
                                       message: "Password must have at least 8 characters"
                                   }
                               })}
                               spellCheck={"false"}/>
                    </div>
                    {errors.password &&
                    <div className={"error"}>
                        <FaExclamationTriangle
                            size='14px'
                            style={{display: 'inline', marginRight: '6px'}}
                        />
                        {errors.password.message}
                    </div>}
                </div>
                <button className="submit-btn" type={"submit"}>LOG IN</button>
            </form>
        </div>
    );

};

export default LogInForm;
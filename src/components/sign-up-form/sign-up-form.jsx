import React from 'react';
import { useForm } from "react-hook-form";
import './sign-up-form.scss'
import {FaExclamationTriangle, FaUser, FaEnvelope, FaKey} from "react-icons/fa";
const SignUpForm = () => {
    const {handleSubmit, errors, register, watch} = useForm();
    const onSubmit = data => console.log(data)
    return (
        <div className={"form-container"}>
            <div className="form-title">I do not have an account</div>
            <div className="form-subtitle">Sign up with your email and password</div>
            <form className={`sign-up-form`} onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-fields">
                    <div className={"input-wrapper"+(errors.fullName?' required':'')}>
                        <div className="input-img-wrapper">
                            <FaUser size='20px' style={{display: 'block'}}/>
                        </div>
                        <input type={'text'}
                               name={'fullName'}
                               placeholder={'Full name'}
                               ref={register({required:'This field is required', maxLength: 120})}
                               spellCheck={"false"}
                        />
                    </div>
                    {errors.fullName && <div className={"error"}>
                        <FaExclamationTriangle
                            size='14px'
                            style={{display: 'inline', marginRight: '6px'}}/>
                        {errors.fullName.message}
                    </div>}
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
                    <div className={"input-wrapper"+(errors.passwordRepeat?' required':'')}>
                        <div className="input-img-wrapper">
                            <FaKey size='20px' style={{display: 'block'}}/>
                        </div>
                        <input type={'password'}
                               name={'passwordRepeat'}
                               placeholder={'Confirm password'}
                               ref={register({
                                   required:'This field is required',
                                   validate: value => value === watch.password || 'The passwords do not match'
                               })}
                               spellCheck={"false"}/>
                    </div>
                    {errors.passwordRepeat &&
                    <div className={"error"}>
                        <FaExclamationTriangle
                            size='14px'
                            style={{display: 'inline', marginRight: '6px'}}
                        />
                        {errors.passwordRepeat.message}
                    </div>}
                </div>
                <button className="submit-btn" type={"submit"}>SIGN UP</button>
            </form>
        </div>
    );
};

export default SignUpForm;
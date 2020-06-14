import React from 'react';
import './custom-form-field.scss'
import {FaExclamationCircle, FaExclamationTriangle} from 'react-icons/fa'
const CustomFormField = ({name, type='text', placeholder, required=true,  FieldIcon=null, formObj, textareaHeightInPx=150}) => {
    const { register, errors } = formObj
    return (
        <div className={`input-family-wrapper ${name}`}>
            {errors[name]?<div className={"error"}>
                                <FaExclamationTriangle
                                    size='14px'
                                    style={{display: 'inline', marginRight: '6px'}}/>
                                    {errors[name].message}
                            </div>:null}
            <div className={"input-wrapper"+(errors[name]?' required':'')}>
                {FieldIcon && (
                    <div className="input-img-wrapper"
                         style={type==='textarea'?{alignItems: 'flex-start', marginTop: '18px'}:{}}>
                        <FieldIcon size='20px' style={{display: 'block'}}/>
                    </div>
                )}

                {(type === "text" && (
                    <input type={'text'}
                          name={name}
                          placeholder={placeholder}
                          ref={register({required:'This field is required', maxLength: 120})}
                          spellCheck={"false"}
                          className={type==='text'?'':'hide'}/>
                )) || (type === 'textarea' && (
                    <textarea name={name}
                             placeholder={placeholder}
                             ref={register({required:'This field is required'})}
                             spellCheck={"false"}
                             style={{height: `${textareaHeightInPx}px`}}
                             className={type==='textarea'?'':'hide'}/>
                 )) || (type === 'email' && (
                     <input type={"email"}
                            name={name}
                            placeholder={placeholder}
                            ref={register({required:'This field is required', pattern: {value: /^\S+@\S+$/i, message: 'Not a valid email address'}})}
                            spellCheck={"false"}
                            className={type==='email'?'':'hide'}/>
                    ))
                }
            </div>
        </div>
    );
};

export default CustomFormField;

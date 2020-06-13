import React from 'react';
import './custom-form-field.scss'
import {FaExclamationCircle} from 'react-icons/fa'
const CustomFormField = ({name, type='text', placeholder, required=true,  FieldIcon=null, formObj, textareaHeightInPx=150}) => {
    const { register, errors } = formObj
    return (
        <div className={`input-family-wrapper ${name}`}>
            <div className={"input-wrapper"+(errors[name]?' required':'')}>
                {FieldIcon && (
                    <div className="input-img-wrapper"
                         style={type==='textarea'?{alignItems: 'flex-start', marginTop: '18px'}:{}}>
                        <FieldIcon size='20px' style={{display: 'block'}}/>
                    </div>
                )}
                <div className="input-warning-img-wrapper"
                     style={{display: errors[name]?'flex':'none'}}>
                    <FaExclamationCircle size='25px' style={{display: 'block'}}/>
                </div>
                    <input type={type}
                           name={name}
                           placeholder={placeholder}
                           ref={register({required})}
                           spellCheck={"false"}
                           className={type==='text'?'':'hide'}/>
                    <textarea name={name}
                              placeholder={placeholder}
                              ref={register({required})}
                              spellCheck={"false"}
                              style={{height: `${textareaHeightInPx}px`}}
                              className={type==='textarea'?'':'hide'}/>
                    <input type={"email"}
                           name={name}
                           placeholder={placeholder}
                           ref={register({required})}
                           spellCheck={"false"}
                           className={type==='email'?'':'hide'}/>
            </div>
        </div>
    );
};

export default CustomFormField;

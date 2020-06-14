import React from 'react';
import { useForm } from "react-hook-form";
import './custom-form.scss'
import CustomFormField from "../custom-form-field/custom-form-field";
const CustomForm = ({formDetails, customFormFieldData}) => {
    const reactHookFormObject = useForm();
    const { handleSubmit } = reactHookFormObject;
    const onSubmit = data => console.log(data)
    console.log(reactHookFormObject.errors)
    const {formClassName, formTitle, formSubtitle, formButton, buttonColor} = formDetails
    return (
        <div className={"form-container"}>
            <div className="form-title">{formTitle}</div>
            <div className="form-subtitle">{formSubtitle}</div>
            <form className={`custom-form ${formClassName}`} onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-fields-grid">
                    {customFormFieldData.map(({name, placeholder, FieldIcon,type,  textareaHeightInPx}, index) => (
                        <CustomFormField name={name}
                                         placeholder={placeholder}
                                         FieldIcon={FieldIcon}
                                         type={type}
                                         textareaHeightInPx={textareaHeightInPx}
                                         formObj={reactHookFormObject}
                                         key={name}/>
                    ))}
                </div>
                <button className="submit-btn" type={"submit"} style={{backgroundColor: {buttonColor}}}>{formButton}</button>
            </form>
        </div>
    );
};

export default CustomForm;
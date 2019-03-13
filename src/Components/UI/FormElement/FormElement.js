import React from 'react';
import Styles from './FormElement.module.css'
const FormElement = (props) => {
    return(
        <div className={Styles.FormElement}>
            <label htmlFor={props.id} className={Styles.Label}>{props.label}</label>
            <input name={props.name}
                   id={props.id}
                   type={props.type}
                   required={props.required}
                   placeholder={props.placeholder}
                   value={props.value}
                   className={[Styles.Input, props.type === 'submit' ? Styles.Submit : null].join(' ')}
            />
        </div>
    )
};

export default FormElement;
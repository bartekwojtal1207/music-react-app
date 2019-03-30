import React from 'react';
import Styles from './FormElement.module.css'


const FormElement = (props) => {
    let styles = Styles.Input;
    let stylesSubmitRegister =  props.type === 'submit' ? Styles.Submit : null;
    let styleYTInput = props.name === 'idSongYt' ? Styles.InputYT : null;

    return(
        <div className={Styles.FormElement} style={props.name === 'idSongYt' ? {paddingRight: 0} : null}>
            <label htmlFor={props.id} className={Styles.Label}>{props.label}</label>
            <input name={props.name}
                   id={props.id}
                   type={props.type}
                   required={props.required}
                   placeholder={props.placeholder}
                   className={[styles, stylesSubmitRegister, styleYTInput].join(' ')}
            />
        </div>
    )
};


export default FormElement;
import React, {Component} from "react";
import {connect} from "react-redux";
import Styles from './Register.module.css';
import RegisterForm from '../../Components/RegisterForm/RegisterForm.js';

class Register extends Component {

    render() {
        return (
            <section>
                <div className={Styles.FormRegisterWrap}>
                    <h3 className={Styles.FormTitle}>Załóż konto !</h3>
                    <RegisterForm/>
                </div>
            </section>
        )
    }
}


export default Register;
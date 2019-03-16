import React, {Component} from "react";
import Styles from './RegisterForm.module.css';
import FormElement from '../../Components/UI/FormElement/FormElement';

import {connect} from "react-redux";

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            controls: {
                emailInput: {
                    name: 'email',
                    type: 'text',
                    required: true,
                    valid: false,
                    placeholder: 'Adres email',
                    value: '',
                    label: 'Podaj adres email'
                },
                passwordInput: {
                    name: 'password',
                    type: 'password',
                    required: true,
                    valid: false,
                    placeholder: 'Hasło',
                    value: '',
                    label: null
                },
                passwordConfirmInput: {
                    name: 'passwordConfrim',
                    type: 'password',
                    required: true,
                    valid: false,
                    placeholder: 'Potwierdź hasło',
                    value: '',
                    label: null
                },
                submitInput: {
                    type: 'submit',
                    value: 'Wyślij'
                }
            }
        }
    }

    sendForm = (e) => {
        let onSendForm = this.props.onSendRegisterForm;
        onSendForm('test');
        let getAuthUser = this.props.getAuthUser;
        getAuthUser('wwwww');
        e.preventDefault();
    };

    render() {
        let formElement = Object.values(this.state.controls).map(function (input, index) {
            return (
                <FormElement
                    required={input.required}
                    key={index}
                    name={input.name}
                    type={input.type}
                    id={input.name}
                    placeholder={input.placeholder}
                    label={input.placeholder}>
                </FormElement>)
        });

        return (
            <form onSubmit={this.sendForm} className={Styles.RegisterForm}>
                {formElement}
                {!this.props.userLogged ? 'asdasdads' : '22222222222'}
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        userName: state.auth.userName,
        userLogged: state.auth.userAuth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSendRegisterForm: (name) => dispatch({type: 'SEND_REGISTER_FORM', data: {name: name}}),
        getAuthUser: (data) => dispatch({type: 'GET_AUTH_USER', data: data })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);

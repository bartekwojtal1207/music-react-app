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

    checkValidate(element, rules = 'requried') {
        //@TODO dodac odpowiednie rozszernie regex dla [maila, hasla]
        let passwordInput = document.querySelector('#password');
        let valid = true;

        if(element.name === 'passwordConfrim') {
            rules = 'samePassword';
        }

        if((rules === 'requried') && (element.value.length < 1)) {
            return valid =  false;
        }else if((rules === 'samePassword') && (element.value.length > 0)) {
            if(element.value.localeCompare(passwordInput.value) === 0) {
                return valid = true;
            }else {
                return valid = false;
            }
        }
        return valid;
    }

    sendForm = (e) => {
        const registerForm = e.target;
        let registerFormElements = registerForm.querySelectorAll('input:not([type=submit])');
        let canSendForm = true;
        let data = {};

        registerFormElements.forEach((input) => {
            if(! this.checkValidate(input)) {
                canSendForm = false
            }

            data = {
                ...data,
                [input.name]: input.value
            }
        });

        if(canSendForm) {
            const registerFormData = new FormData();

            // Object.values(data).map((value, index) => {
            //     console.log(value)
            //     console.log(index)
            // });

            // Object.keys(data).forEach(function(key) {
            //
            //     console.log(key, data[key]);
            //
            // });

            let onSendForm = this.props.onSendRegisterForm;
            onSendForm(data);
        }

        e.preventDefault();
        //1 walidacja
        //2 serializacja obiaktu
        //3 stowrzenie form data
        //4 wywolanie funkcji z redux
    };

    render() {
        let formElement = Object.values(this.state.controls).map(function (input, index) {
            return (
                <FormElement
                    data-required={input.required}
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
        onSendRegisterForm: (data) => dispatch({type: 'SEND_REGISTER_FORM', data: data}),
        getAuthUser: (data) => dispatch({type: 'GET_AUTH_USER', data: data })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);

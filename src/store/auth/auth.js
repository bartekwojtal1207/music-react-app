import { updateObject } from '../../shared/utility';
import axios from "../../hoc/axios/axios-register";
const redux = require('redux');

const initialState = {
    userAuth: false,
    userName: ''
};

const getAuthUser = (state, action) => {
    console.log('state');
    return state.userAuth;
};

const sendRegisterForm = (state, action) => {
console.log(action.data)
    let formJSON = JSON.stringify(action.data);

    let fakeId = Date.now();
    axios.post('/users.json', {
        id: fakeId,
        email: action.data.email,
        password: action.data.password,
        passwordConfirm: action.data.passwordConfrim
    }).then(respone => {
        console.log(respone)
    }).catch(erorr => {
        console.log(erorr)
    });

    console.log("send register form");
    return state;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND_REGISTER_FORM': return sendRegisterForm(state, action);
        case 'GET_AUTH_USER': return getAuthUser(state, action);
        default:
            return state
    }
};

export default reducer;
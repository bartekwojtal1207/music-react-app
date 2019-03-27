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
    var myJSON = JSON.stringify(action.data);

    axios.post('/users.json', {
        test: 'testssss'
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
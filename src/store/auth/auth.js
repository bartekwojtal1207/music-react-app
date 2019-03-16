import { updateObject } from '../../shared/utility';
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
    state = {
            ...state,
       userAuth: true,
       userName: action.data.name
    };
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
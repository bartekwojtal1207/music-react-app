import { updateObject } from '../../shared/utility';
const redux = require('redux');

const initialState = {
    userAuth: false,
    userName: ''
};

const sendRegisterForm = (state, action) => {
    console.log('2')
    updateObject(state, { userAuth: true, userName: action.data.name})
    console.log(state.userAuth);
    return state;
};

const getAuthUser = (state, action) => {
    console.log(state.userAuth);
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
import axios from "../../hoc/axios/axios-register";
const redux = require('redux');

const initialState = {
    songsList : {
        id: [ 'a12fQ1UlWPI',
            'IsZNTPluKN4'
        ]
    }
};

const getSongsId = (state, action) => {
    return state.songsList.id;
};

const addSongsId = (state, action) => {
    console.log(state)
    console.log(action)
    return state.songsList.id
};

const reducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'GET_SONGS_ID': return getSongsId(state, action);
        case 'ADD_SONGS_ID': return addSongsId(state, action);
        default:
            return state
    }
};

export default reducer;

import * as actionType from "../../action/action";
import updateObject from "../../../shared/utility";
const redux = require('redux');

const initialState = {
    songsList : []
};

const getSongs = (state, action) => {
    return state;
};

const getSongsSuccess = (state, action) => {
    return state;
};

const addSongs = (state, action) => {
    return state;
};

const addSongsSuccess = (state, action) => {
    return updateObject( state, {songsList: [...state.songsList, action.data]} );
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_SONGS_ID: return getSongs(state, action);
        case actionType.GET_SONGS_ID_SUCCESS: return getSongsSuccess(state, action);
        case actionType.ADD_SONGS_ID: return addSongs(state, action);
        case actionType.ADD_SONGS_ID_SUCCESS: return addSongsSuccess(state, action);
        default:
            return state
    }
};

export default reducer;
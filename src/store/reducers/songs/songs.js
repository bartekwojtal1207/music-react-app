import * as actionType from "../../action/action";
import updateObject from "../../../shared/utility";
const redux = require('redux');

const initialState = {
    songsList : []
};

const getSongs = (state, action) => {
    console.log('GET SONGS  - REDUCER');
    return state;
};

const getSongsSuccess = (state, action) => {
    console.log('getSongsSuccess - REDUCER');
    return state;
};

const addSongs = (state, action) => {
    console.log('addSongs - REDUCER');
    console.log(action.data);
    return state;
};

const addSongsSuccess = (state, action) => {
    console.log('addSongsSuccess - REDUCER');
    console.log(action.data);
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
import * as actionType from "../../action/action";
import updateObject from "../../../shared/utility";
const redux = require('redux');

const initialState = {
    songsList : [],
    timestamp: "timestamp"
};

// function convertArraySongs(array = initialState.songsList.id) {
//     let idSongs = Object.assign({}, array);
//     let jsonSongs = JSON.stringify(idSongs);
//     console.log(idSongs)
//     console.log(jsonSongs)
// }

const getSongsId = (state, action) => {
    console.log(action)
    return updateObject( state, {

    });
};

const addSongsId = (state, action) => {
    let idSong = action.idYT;
    let idArray = state.songsList.id;
    idArray.push(idSong);
    return state;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_SONGS_ID: return getSongsId(state, action);
        case actionType.ADD_SONGS_ID: return addSongsId(state, action);
        default:
            return state
    }
};

export default reducer;
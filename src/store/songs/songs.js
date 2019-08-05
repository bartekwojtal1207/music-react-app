import axios from "../../hoc/axios/axios-register";
import openSocket from 'socket.io-client';
import {AddSong} from "../../API/AddSong";

const redux = require('redux');

const initialState = {
    songsList : {
        id: [ 'a12fQ1UlWPI',
            'IsZNTPluKN4'
        ]
    },
    timestamp: "timestamp"
};

function converArraySongs(array = initialState.songsList.id) {
    let idSongs = Object.assign({}, array);
    let jsonSongs = JSON.stringify(idSongs);
    console.log(idSongs)
    console.log(jsonSongs)
}
//saveSongToFile();

const test = () => {
    console.log('x`');
    AddSong(1999, () => {
        console.log('test')
    })
    converArraySongs();
    return true;
};

const getSongsId = (state = initialState, action) => {
    let array = [
            ...state.songsList.id
    ];
    return array;
};

const addSongsId = (state = initialState.songsList.id, action) => {
    let idYT = action.idYT;
    let idArray = state.songsList.id;
    idArray.push(idYT);
    return state;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SONGS_ID': return getSongsId(state, action);
        case 'ADD_SONGS_ID': return addSongsId(state, action);
        case 'TEST': return test(state, action);
        default:
            return state
    }
};

export default reducer;

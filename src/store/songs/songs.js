import axios from "../../hoc/axios/axios-register";
const redux = require('redux');
const fs = require('fs');

const initialState = {
    songsList : {
        id: [ 'a12fQ1UlWPI',
            'IsZNTPluKN4'
        ]
    }
};

function saveSongToFile(array = initialState.songsList.id) {
    let idSongs = Object.assign({}, array);
    let jsonSongs = JSON.stringify(idSongs);

    fs.writeFile('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
    });

    console.log(fs);
    console.log(jsonSongs);
}
saveSongToFile();

const getSongsId = (state, action) => {
    return state.songsList.id;
};

const addSongsId = (state, action) => {
    let idYT = action.idYT;
    let idArray = state.songsList.id;
    idArray.push(idYT);
    return state;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SONGS_ID': return getSongsId(state, action);
        case 'ADD_SONGS_ID': return addSongsId(state, action);
        default:
            return state
    }
};

export default reducer;

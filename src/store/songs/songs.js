import axios from "../../hoc/axios/axios-register";
import openSocket from 'socket.io-client';


const redux = require('redux');

const initialState = {
    songsList : {
        id: [ 'a12fQ1UlWPI',
            'IsZNTPluKN4'
        ]
    },
    timestamp: ' chuj wie'
};

function saveSongToFile(array = initialState.songsList.id) {
    let idSongs = Object.assign({}, array);
    let jsonSongs = JSON.stringify(idSongs);
}

const test = () =>
{
    console.log('adasdads')

   //  subscripeToTimer((err, timestamp) => this.setState({
   //      timestamp
   //  }));
   // // alert('Hello world!');

    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.open("get", "/service");
    //
    // fetch('/service', {method: 'GET'})
    //     .then(function(response) {
    //         if(response.ok) {
    //             console.log(response)
    //             return response;
    //         }
    //         throw new Error('Request failed.');
    //     })
    //     .then(function(data) {
    //        console.log(data)
    //         alert('wykonano akcje')
    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //     });




    return true;
};

saveSongToFile();

const getSongsId = (state = initialState, action) => {
    let array = [
            ...state.songsList.id
    ];
    console.log(array);
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

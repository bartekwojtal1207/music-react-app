const redux = require('redux');
const createStore = redux.createStore;

    const initialState = {
        songsList : 'pusta'
    };

    const rootReducer = (state = initialState, action) => {
        if(action.type ===  'GET_SONG_LIST') {//@TODO do przeniesienia
            return {
                ...state,
                songsList: state.songsList + ' ' + 'fajne to'
            };
        }

        return state;
    };

const songsStore = createStore(rootReducer);

// subsciption
// przyjmuje jako argument funkcje ktora zostanie odpalona gdy stan zostanie zmieniony
songsStore.subscribe(()=> {
    console.log('zmieniono stan !!!!!!!!!', songsStore.getState());
});

//dispatch actio
songsStore.dispatch({type: 'GET_SONG_LIST'});


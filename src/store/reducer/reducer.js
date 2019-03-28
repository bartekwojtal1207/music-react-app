const initialState = {
    songsList : {
        id: ['a12fQ1UlWPI', 'IsZNTPluKN4']
    }
};

const reducer = (state = initialState, action) => {
    if(action.type === 'GET__SONGS_LIST') { return state; }
    return state;
};

export default reducer;

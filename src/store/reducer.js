const initialState = {
    songsList : {
        song1 : {
            id: 0,
            title: 'tytul',
            author: 'author',
            url: 'www.youtube.pl'},
        song2: {
            id: 2,
            title: 'tytul 2',
            author: 'author 2',
            url: 'www.youtube.pl'}

    }
};

const reducer = (state = initialState, action) => {
    if(action.type === 'GET_LIST') {
    console.log(state.songsList)
    //     return {
    //         ...state,
    //         songsList: state.songsList + ' ' + 'fajne to' + action.data.name
    //     };
    }
    return state;
};

export default reducer;

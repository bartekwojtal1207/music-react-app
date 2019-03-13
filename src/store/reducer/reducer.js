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
        return state;
    }

    return state;
};

export default reducer;

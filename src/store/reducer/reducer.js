const initialState = {
    songsList : {
        song1 : {
            id: 0,
            title: 'tytul',
            author: 'author',
            url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
            type: 'video/ogg'
        },
        song2: {
            id: 1,
            title: 'tytul 2',
            author: 'author 2',
            url: 'https://www.youtube.com/watch?v=IsZNTPluKN4',
            type: 'video/ogg'
        }

    }
};




const reducer = (state = initialState, action) => {
    if(action.type === 'GET__SONGS_LIST') { return state; }
    return state;
};

export default reducer;

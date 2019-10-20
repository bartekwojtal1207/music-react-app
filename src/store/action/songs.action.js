import * as actionType from "./action";
import axios from 'axios';

export const getSongsStart = () => {
    return {
        type: actionType.GET_SONGS_ID_START
    };
};

export const getSongs = (state, data) => {
    return dispatch => {
        dispatch(getSongsStart());

        axios.get( "./myList.json" )
            .then( res => {
                console.log(res.data);
                console.log('get songs action');
                dispatch(getSongsSuccess(res.data));
            }).catch( err => {
                console.log(err)
                dispatch(getSongsFail(err));
            } );
    }
};

export const getSongsSuccess = (data) => {
    return {
        data: data,
        type: actionType.GET_SONGS_ID_SUCCESS
    }
};

export const getSongsFail = error => {
    return {
        errorMessage: error,
        type: actionType.GET_SONGS_ID_FAIL
    }
};

export const addSongsStart = () => {
    return {
        type: actionType.ADD_SONGS_ID_START
    };
};

export const addSongs = (data) => {
    return dispatch => {
        dispatch(addSongsStart());
        axios.post( "http://localhost:8080/service")
            .then( res => {
                dispatch(addSongsSuccess(data));
            }).catch( err => {
            console.log(err);
            dispatch(addSongsFail(err));
        } );
    }
};

export const addSongsSuccess = (data) => {
    return {
        data: data,
        type: actionType.ADD_SONGS_ID_SUCCESS
    }
};

export const addSongsFail = error => {
    return {
        errorMessage: error,
        type: actionType.GET_SONGS_ID_FAIL
    }
};
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

        axios.get( "http://localhost:8080/lista" )
            .then( res => {
                console.log( res.data);
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

        let map = new Map();
        const objData = {};

        map.set(data, {
            name: null
        });

        for (let [key, value] of map) {
            objData[key] = value;
        }

        axios.post( "http://localhost:8080/service", objData)
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
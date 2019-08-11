import * as actionType from "./action";
import axios from 'axios';

const initialState = {
    songsList : {
        id: [ 'a12fQ1UlWPI', 'IsZNTPluKN4']
    }
};

export const getSongsStart = () => {
    return {
        type: actionType.GET_SONGS_ID_START
    };
};

export const getSongs = (id = initialState.songsList.id) => {
    return dispatch => {
        dispatch(getSongsStart());
        axios.get( '/orders.json' )
            .then( res => {
                const fetchedOrders = [];
                for ( let key in res.data ) {
                    fetchedOrders.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(getSongsSuccess());
            } )
            .catch( err => {
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
import React, {Component} from "react";
import {connect} from "react-redux";
import SongsListElement from './SongsListElement/SongsListElement';
//css
import Styles from './SongsList.module.css';

class SongsList extends Component {

    render() {
        let songsList = Object.values(this.props.songsList) || null;
        let countSongs = songsList.length || 0;
        let emptyDescription = countSongs === 0 ? <p className={Styles.EmptyListDesription}>jest pusta ! :-(</p> : <p className={Styles.EmptyListDesription}>liczba utworów: {countSongs}</p>;
        let songsListElement = [] || null;

        if(countSongs > 0) {
            songsListElement = Object.keys(songsList).map(function(val)  {
                let song = songsList[val];
                    return (
                        <SongsListElement href={song.url} key={song.id}>{song.title + ' ' + song.author}</SongsListElement>
                    );
            })
        }
        return(
            <div onClick={this.props.displaySongList} className={Styles.SongsListContainer}>
                <h3 className={Styles.SongsListTitle}>Twoja lista utworów</h3>
                {emptyDescription}
                <ul className={Styles.SongList}>
                    {songsListElement}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        songsList: state.songsList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        displaySongList: () => dispatch({type: 'GET_LIST', data: {name: 'Bartek Wojtal'}})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
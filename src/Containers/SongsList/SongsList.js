import React, {Component} from "react";
import {connect} from "react-redux";
import SongsListElement from './SongsListElement/SongsListElement';
//css
import Styles from './SongsList.module.css';

class SongsList extends Component {
    componentDidMount() {
      //  let getSongsId = this.props.getSongsId;
      //  getSongsId()
    }

    render() {

        // let songsList = Object.values(this.props.songsList) || null;
        //
        // let countSongs = songsList.length || 0;
        //let emptyDescription = countSongs === 0 ? <p className={Styles.EmptyListDesription}>jest pusta ! :-(</p> : <p className={Styles.EmptyListDesription}>liczba utworów: {countSongs}</p>;
        let songsListElement = [] || null;

        // if(countSongs > 0) {
        //     songsListElement = Object.keys(songsList).map(function(val)  {
        //         let song = songsList[val];
        //         console.log(song[val])
        //             return (
        //                 <SongsListElement href={song.url} key={song[val]}>{song.title + ' ' + song.author}</SongsListElement>
        //             );
        //     })
        // }
        return(
            <div className={Styles.SongsListContainer}>
                <h3 className={Styles.SongsListTitle}>Twoja lista utworów</h3>
                {/*{emptyDescription}*/}
                <button type="button" onClick={this.props.test}>Click</button>
                <ul className={Styles.SongList}>
                    {/*{songsListElement}*/}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {  
    return {
        songsList: state.songs.songsList
    }
};

const mapDispatchToProps = dispatch => {
    return {
           // getSongsId: (data) => dispatch({type: 'GET_SONGS_ID'}),
            test: (data) => dispatch({type: 'TEST'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
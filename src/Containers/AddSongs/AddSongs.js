import React, {Component} from "react";
import {connect} from "react-redux";
import AddSongYT from '../../Components/AddSongYT/AddSongYT'
//css
import Styles from './AddSongs.module.css';

class AddSongs extends Component{

    addSong = (e) => {
        console.log(e.target)
        e.preventDefault();
        let addSongsId = this.props.addSongsId;
        addSongsId('id')
    };

    render() {
        return (
            <div className={Styles.Container}>
                <h3 className={Styles.Title}>Dodaj utwór</h3>
                <p className={Styles.Text}>Wklej id filmiku z youtube</p>
                <AddSongYT addSong={this.addSong}></AddSongYT>
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
        getSongsId: (data) => dispatch({type: 'GET_SONGS_ID'}),
        addSongsId: (data) => dispatch({type: 'ADD_SONGS_ID'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSongs);
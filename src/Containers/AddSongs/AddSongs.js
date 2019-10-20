import React, {Component} from "react";
import {connect} from "react-redux";
import AddSongYT from '../../Components/AddSongYT/AddSongYT'
import * as actionType from "../../store/action/action"
import * as actions from "../../store/action/songs.action";
//css
import Styles from './AddSongs.module.css';
import {getSongs} from "../../store/action/songs.action";

class AddSongs extends Component {
    addSong = (e) => {
        e.preventDefault();
        let addSongYTForm = e.target;
        let songId = addSongYTForm.querySelector('#songYt').value;
        let sendForm = false;
        songId.length < 1 ? sendForm = false : sendForm = true;
        //
        if (sendForm) {
            let addSongsId = this.props.addSongs;
            addSongsId(songId);
        //     addSongYTForm.querySelector('#songYt').value = '';
        //     alert('Twoje Id zostało dodane');
        }
    };

    componentDidMount() {
        this.props.getSongs();
    }

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
        getSongs: (data) => dispatch(actions.getSongs(data)),
        addSongs: (data) => dispatch(actions.addSongs(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSongs);
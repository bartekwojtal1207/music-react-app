import React, {Component} from "react";
import {connect} from "react-redux";
import AddSongYT from '../../Components/AddSongYT/AddSongYT'
//css
import Styles from './AddSongs.module.css';

class AddSongs extends Component {

    addSong = (e) => {
        let addSongYTForm = e.target;
        let idYTinput = addSongYTForm.querySelector('#songYt').value;
        let sendForm = false;

        if(idYTinput.length > 1) {
            sendForm = true;
        }
        //zKOzQdmXotI
        if(sendForm) {
            let addSongsId = this.props.addSongsId;
            addSongsId(idYTinput);
            alert('Twoje Id zostało dodane');
            addSongYTForm.querySelector('#songYt').value = '';
        }

        e.preventDefault();
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
        addSongsId: (idYT) => dispatch({type: 'ADD_SONGS_ID', idYT: idYT, typeSong: 'YT'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSongs);
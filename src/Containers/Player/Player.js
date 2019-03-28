import React, { Component } from 'react';
import {connect} from "react-redux";
import ReactPlayer from 'react-player'
import Styles from './Player.module.css';


class Player extends Component {
    constructor(props){
        super(props);

        this.state = {
            songs : [],
            songItem: {

            }
        }
    }

    getSongsSrc = () => {
        let updatedState = [];
        updatedState = [ ...this.state.songs];

        Object.values(this.props.songsList).map((value,index) => {
            updatedState = [
                ...this.state.songs,
                value
            ];
            return updatedState;
        });
        this.setState({songs: updatedState})
    };

    testYt = (songId = 'IsZNTPluKN4') => {
        let myRequest = new Request('https://www.googleapis.com/youtube/v3/videos?id=' + songId + '&key=AIzaSyDYp2eP0cwX-wvLKeDZRWLkniMfy5Kz_PQ&part=snippet,contentDetails,statistics,status');

        console.log(this.state.songs)
        fetch(myRequest)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('HTTP error, status = ' + response.status);
                }
                return response.json();
            }).then(function(response) {
                Object.values(response.items).map((item) => {
                    let updatedState = {};
                    let categoryId = item.snippet.categoryId;
                    let songTitle = item.snippet.localized.title;
                    let songAuthor = item.snippet.localized.author;
                    let viewCount = item.statistics.viewCount;
                    let defaultJpg = item.snippet.thumbnails.default.url;

                    console.log(response.items)
                })
            });
    };

    componentWillUpdate(nextProps, nextState, nextContext) {


    }

    componentDidMount() {
        this.getSongsSrc();
        this.testYt()
    }

    render() {
        console.log(this.state.songs)
        const songs = this.state.songs;
        let reactPlayer = null;
        let idSong = null;
        let id = 0;

        Object.values(songs).map(function (song,i) {
            if( id === i) { idSong = 'https://www.youtube.com/watch?v=' + song[id]  }
            console.log(idSong)
            reactPlayer = <ReactPlayer url={idSong} />
        });

        return(
            <div className={Styles.PlayerContainer}>
                {reactPlayer}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userLogged: state.auth.userAuth,
        songsList: state.songs.songsList
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);

import React, { Component } from 'react';
import {connect} from "react-redux";
import ReactPlayer from 'react-player'
import Styles from './Player.module.css';

class Player extends Component {
    constructor(props){
        super(props);

        this.state = {
            songs : [],
            songItem: {},
            indexSong: 0
        }
    }

    getSongsId = () => {
        // pobiera songs id z reduxa
        let updatedState = [];
        updatedState = [ ...this.state.songs];

        this.props.songsList.id.map((value, index) => {
            console.log(value)
            updatedState.push(value);
            return updatedState;
        });

        console.log(updatedState)
        this.setState({songs: updatedState})

    };

    testYt = (id = 'IsZNTPluKN4') => {
        let myRequest = new Request('https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=AIzaSyDYp2eP0cwX-wvLKeDZRWLkniMfy5Kz_PQ&part=snippet,contentDetails,statistics,status');

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
                    console.log(item)
                })
            });
    };

    componentWillUpdate(nextProps, nextState, nextContext) {}

    componentDidMount() {
        this.getSongsId();
        this.testYt()
    }

    render() {
        const songs = this.state.songs;
        let reactPlayer = null;
        let url = null;
        let id = this.state.indexSong;

        songs.map(function (song,i) {
            if( id === i) { url = 'https://www.youtube.com/watch?v=' + song }
            reactPlayer = <ReactPlayer url={url} />
        });

        return (
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

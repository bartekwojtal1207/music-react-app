import React, { Component } from 'react';
import {connect} from "react-redux";
import ReactPlayer from 'react-player'
import Styles from './Player.module.css';
import { AddSong } from '../../API/AddSong'

class Player extends Component {
    constructor(props){
        super(props);

        this.state = {
            songsId : [],
            songItem: {},
            indexSong: 0,
            timestamp: 'nulllllll'
        }

        AddSong(1999, () => {
            console.log('test')
        })
    }

    getSongsId = () => {
        // pobiera songs id z reduxa
        let updatedState = [];
        updatedState = [ ...this.state.songsId];

        this.props.songsList.id.map((value, index) => {
            updatedState.push(value);
            return updatedState;
        });
        this.setState({songsId: updatedState})
    };

    testYt = (id = 'a12fQ1UlWPI') => {
       // // let myRequest = new Request('https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=AIzaSyDYp2eP0cwX-wvLKeDZRWLkniMfy5Kz_PQ&part=snippet,contentDetails,statistics,status');
       //
       //  fetch(myRequest)
       //      .then(function(response) {
       //          if (!response.ok) {
       //              throw new Error('HTTP error, status = ' + response.status);
       //          }
       //          return response.json();
       //      }).then(function(response) {
       //          Object.values(response.items).map((item) => {
       //              let updatedState = {};
       //              let categoryId = item.snippet.categoryId;
       //              let songTitle = item.snippet.localized.title;
       //              let songAuthor = item.snippet.localized.author;
       //              let viewCount = item.statistics.viewCount;
       //              let defaultJpg = item.snippet.thumbnails.default.url;
       //              console.log(item)
       //          })
       //      });
    };

    prevSong = () => {
        let index = this.state.indexSong;
        let elementsLength = this.state.songsId.length;

        if(index !== 0) {
            index = index - 1;
        }else {
            index = this.state.songsId.length - 1;
        }
        this.setState({indexSong: index})
    };

    nextSong = () => {
        let index = this.state.indexSong;
        let elementsLength = this.state.songsId.length;

        if(index < (elementsLength - 1)) {
            index = index + 1;
        }else {
            index = 0;
        }
        this.setState({indexSong: index})
    };

    componentDidMount() {
        this.getSongsId();
        this.testYt()
    }

    render() {
        const songs = this.state.songsId;
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
                <div className={Styles.PlayerPanelContainer}>
                    <button className={Styles.Button} onClick={this.prevSong}>Poprzedni utwór</button>
                    <button className={Styles.Button} onClick={this.nextSong}>Następny utwór</button>
                </div>
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

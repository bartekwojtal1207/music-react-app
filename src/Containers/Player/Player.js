import React, { Component } from 'react';
import {connect} from "react-redux";
import ReactPlayer from 'react-player'
import Styles from './Player.module.css';


class Player extends Component {
    constructor(props){
        super(props);

        this.state = {
            songs : []
        }
    }

    getSongsSrc = () => {
        let updatedState = [];
        updatedState = [ ...this.state.songs];
        let song = {};

        Object.values(this.props.songsList).map((value,index) => {
            song = {
                ...this.state.songs,
                url: value.url,
            };
            updatedState.push(song)
        });

        this.setState({songs: updatedState})
    };

    testYt = () => {
        let myRequest = new Request('https://www.googleapis.com/youtube/v3/videos?id=ysz5S6PUM-U&key=AIzaSyDYp2eP0cwX-wvLKeDZRWLkniMfy5Kz_PQ&part=snippet,contentDetails,statistics,status');
        fetch(myRequest)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('HTTP error, status = ' + response.status);
                }
                return response.json();
            })
            .then(function(response) {
                console.log(response.items)
            });
    };


    componentDidMount() {
        this.getSongsSrc();
        this.testYt()
    }


    render() {
        const url = this.state.songs;
        let reactPlayer = null;
        let x = null;
        let id = 1;

        Object.values(url).map(function (v,i) {
            if( id === i) { x = v.url }
            reactPlayer = <ReactPlayer url={x} />
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

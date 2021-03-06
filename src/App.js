import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import {Switch, Route} from "react-router-dom";
import Register from "./Containers/Register/Register";
import SongsList from "./Containers/SongsList/SongsList";
import Player from "./Containers/Player/Player";
import AddSongs from "./Containers/AddSongs/AddSongs";


class App extends Component {
  render() {

    return (
        <Layout>
          <Switch>
            <Route path={'/register'} component={Register}></Route>
            <Route path={'/'} exact component={SongsList}></Route>
            <Route path={'/player'} component={Player}></Route>
            <Route path={'/add-songs'} component={AddSongs}></Route>
          </Switch>
        </Layout>
    );
  }
}

export default App;

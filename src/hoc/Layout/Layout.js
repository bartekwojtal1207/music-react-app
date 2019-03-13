import React, { Component } from 'react';

import stlyes from './Layout.module.css';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import SongsList from "../../Containers/SongsList/SongsList"

import styles from './Layout.module.css';
class Layout extends Component {

    render() {
        return (
            <div className={stlyes.Container}>
                <Header/>
                <Sidebar/>
                <section className={styles.Content}>
                    {this.props.children}
                </section>
            </div>
        );
    }
}

export default Layout;

import React, { Component } from 'react';
import styles from './Sidebar.module.css';
import ButtonSidebar from '../UI/SidebarButton/SidebarButton';
import SidebarElement from './SidebarElement/SidebarElement';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            sidebarListText: {
                link1: {
                    id: 1,
                    title: 'Twoja lista',
                    url: '/player'
                },
                link2: {
                    id: 2,
                    title: 'Dodaj swój utwór',
                    url: ''
                },
                link3: {
                    id: 3,
                    title: 'Najpopularniejsze',
                    url: ''
                },
                link4: {
                    id: 4,
                    title: 'Załóż konto',
                    url: ''
                }
            },
            showSidebar: false
        }
    }

    showSidebar = () => {
        const visibleSidebar = this.state.showSidebar;
        const showSidebar = !visibleSidebar;
        const updatedShowSidebar = {
            ...this.state.showSidebar
        };
        updatedShowSidebar[0] = showSidebar;

        this.setState({
            showSidebar: updatedShowSidebar[0]
        });
    };

    clickLink = (e) => {

        console.log(e)
    };

    render() {
        let sidebarListElement = Object.values(this.state.sidebarListText).map((listElement, index) =>
            <SidebarElement key={listElement.id} click={this.clickLink} url={listElement.url}>{ listElement.title }</SidebarElement>
        );

        return (
            <section>
                <ButtonSidebar click={this.showSidebar}>MENU</ButtonSidebar>
                <ul className={[styles.Sidebar, this.state.showSidebar ? styles.SidebarShow : null].join(' ')}>
                    {sidebarListElement}
                </ul>
            </section>
        )
    }
}

export default Sidebar;


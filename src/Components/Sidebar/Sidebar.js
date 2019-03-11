import React, { Component } from 'react';
import styles from './Sidebar.module.css';
import ButtonSidebar from '../UI/SidebarButton/SidebarButton';
import SidebarElement from './SidebarElement/SidebarElement';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            sidebarListText: ['O nas', 'Najpopularniejsze', 'Dodaj swój utwór', 'Zaloguj się'],
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

    render() {
        let sidebarListElement = this.state.sidebarListText.map((value, index) =>
            <SidebarElement key={index}>{ value }</SidebarElement>
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


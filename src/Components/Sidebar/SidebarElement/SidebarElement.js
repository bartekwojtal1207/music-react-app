import React from 'react'
import styles from './SidebarElement.module.css';
import {NavLink} from "react-router-dom";

const sidebarElement = (props) => (
    <li className={styles.Sidebar__element}><NavLink to={props.url} className={styles.Sidebar__element__link}>{props.children}</NavLink></li>
);

export default sidebarElement;
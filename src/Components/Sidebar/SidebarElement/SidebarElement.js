import React from 'react'
import styles from './SidebarElement.module.css';

const sidebarElement = (props) => (
    <li className={styles.Sidebar__element}>{props.children}</li>
);

export default sidebarElement;
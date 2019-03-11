import React from 'react';
import styles from './SidebarButton.module.css';

const button = (props) => (
    <div className={styles.ButtonWrap}>
        <button className={[styles.Button, styles.ButtonSidebar].join(' ')} onClick={props.click}>{props.children}</button>
</div>
);

export default button;
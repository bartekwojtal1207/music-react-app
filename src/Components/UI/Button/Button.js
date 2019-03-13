import React from 'react';
import styles from './Button.module.css';
import {NavLink} from "react-router-dom";

const button = (props) => (
    <div className={styles.ButtonWrap}>
        <NavLink to={props.href} className={[styles.Button, styles.ButtonRed, styles.ButtonSmall ].join(' ')}>{props.children}</NavLink>
    </div>
);

export default button;
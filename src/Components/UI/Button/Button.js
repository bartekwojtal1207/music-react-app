import React from 'react';
import styles from './Button.module.css';

const button = (props) => (
    <div className={styles.ButtonWrap}>
        <button className={[styles.Button, styles.ButtonRed, styles.ButtonSmall ].join(' ')}>{props.children}</button>
    </div>
);

export default button;
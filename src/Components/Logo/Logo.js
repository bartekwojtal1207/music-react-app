import React from 'react';
import mainLogo from '../../assets/img/logo.svg';
import styles from './Logo.module.css';


const logo = (props) => (
    <div className={styles.LogoWrap}>
        <img src={mainLogo} className={styles.Logo} alt="Logo" />
    </div>
);

export default logo;
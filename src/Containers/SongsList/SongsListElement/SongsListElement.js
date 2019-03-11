import React from 'react';

import Styles from './SongsListElement.module.css';

const SongsListElement = (props) => {
    console.log(props)
    return (
        <li className={Styles.SongsListElement}>
            <a href={props.href} target='_blank' className={Styles.SongsListElementLink}>
                <p  className={Styles.SongsListElementTitle}>{props.children}</p>
            </a>
        </li>
    )
};

export default SongsListElement;
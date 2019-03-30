import React from 'react';

import Styles from './SongsListElement.module.css';

const SongsListElement = (props) => {
    return (
        <li className={Styles.SongsListElement} key={props.id}>
            {/*<a href={props.href} target='_blank' className={Styles.SongsListElementLink}>*/}
            {/*    <p  className={Styles.SongsListElementTitle}>{props.children}</p>*/}
            {/*</a>*/}
        </li>
    )
};

export default SongsListElement;
import React, { Component } from 'react';
import Styles from './AddSongYT.module.css';
import FormElement from '../UI/FormElement/FormElement';

const addSongYT = (props) => {

    return(
        <div className={Styles.Wrap}>
            <form className={Styles.Form} onSubmit={props.addSong}>
                <FormElement
                    name={'idSongYt'}
                    id={'songYt'}
                    type={'text'}
                    required={true}
                    placeholder={'Tutaj wklej id wybranego filmu'}
                />
                <button className={Styles.ButtonYT} role="submit">Zapisz</button>
            </form>
        </div>
    )
};

export default addSongYT;
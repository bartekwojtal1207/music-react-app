import React, { Component } from 'react';
import stlyes from "./Header.module.css";
import Logo from "../Logo/Logo";
import Button from '../UI/Button/Button';
import {Router} from 'react-router-dom';

const header = (props) => (
    <header className={stlyes.Header}>
        <Button href={"/register"}>Zaloguj się</Button>
        <Logo />
    </header>
);

export default header;
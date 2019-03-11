import React, { Component } from 'react';
import stlyes from "./Header.module.css";
import Logo from "../Logo/Logo";
import Button from '../UI/Button/Button';

const header = (props) => (
    <header className={stlyes.Header}>
        <Button>Zaloguj się</Button>
        <Logo />
    </header>
);

export default header;
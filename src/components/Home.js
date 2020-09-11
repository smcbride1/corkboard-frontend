import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <>
                <h1>Visually organize your notes</h1>
                <Button text="Login" path="/login"></Button>
                <Button text="Register" path="/register"></Button>
            </>
        );
    }
}
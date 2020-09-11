import React, { Component } from 'react';
import './Home.css';
import Button from './Button.js';

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="wrapper">
                    <h1>Visually organize your notes</h1>
                    <p>
                        <br></br>
                        Your own digital corkboard. Use it to create and manage notes visually.<br></br>
                        Easily create nested boards to help organize your content.
                    </p>
                </div>
                <div className="wrapper">
                    <Button text="Login" path="/login"></Button>
                    <Button text="Register" path="/register"></Button>
                </div>
            </>
        );
    }
}
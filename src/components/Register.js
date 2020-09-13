import React, { Component } from 'react';
import './Home.css';
import Button from './Button.js';
import InputText from './InputText.js';

export default class Register extends Component {
    handleOnClick = (event) => {
        alert("")
    }

    render() {
        return (
            <>
                <div className="wrapper">
                    <h1>Register</h1>
                    <br/>
                </div>
                <div className="wrapper">
                    <p>Name</p>
                    <InputText/>
                    <p>Email</p>
                    <InputText/>
                    <p>Password</p>
                    <InputText/>
                    <br/>
                    <br/>
                    <Button text="Login" path="/login" onClickEvent={this.handleOnClick}></Button>
                    <Button type="link" text="Register" path="/register"></Button>
                </div>
            </>
        );
    }
}
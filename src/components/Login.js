import React, { Component } from 'react';
import './Home.css';
import Button from './Button.js';
import Submit from './Submit.js';
import InputText from './InputText.js';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    handleOnSubmit = (event) => {

    }

    render() {
        return (
            <>
                <div className="wrapper">
                    <h1>Login</h1>
                    <br/>
                </div>
                <div className="wrapper">
                    <form onSubmit={this.handleOnSubmit}>
                        <p>Email</p>
                        <input type="text" onChange={this.handleEmailChange} value={this.state.email}></input>
                        <p>Password</p>
                        <input type="password" onChange={this.handlePasswordChange} value={this.state.password}></input>
                        <br/>
                        <br/>
                        <Submit value="Login"></Submit>
                    </form>
                    <Button type="link" text="Register" path="/register"></Button>
                </div>
            </>
        );
    }
}
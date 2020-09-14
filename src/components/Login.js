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
            password: "",
            error: false,
            errorMessage: ""
        }
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    handleOnSubmit = (event) => {
        let formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);

        fetch('http://localhost:4000/login', {
        method: 'POST', // or 'PUT'
        body: formData,
        })
        .then(response => response.json())
        .then(data => {
        console.log(data.error)
        if (data.error) {
            this.setState({error: true});
            this.setState({errorMessage: data.message});
        } else {
            
        }
        });
        event.preventDefault();
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
                        {this.state.error ? 
                        <>
                            <h2 className="error-message">{this.state.errorMessage}</h2>
                            <br/>
                        </>
                        :
                        null}
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
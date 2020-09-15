import React, { Component } from 'react';
import './Home.css';
import Button from './Button.js';
import InputText from './InputText.js';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            error: false,
            errorMessage: ""
        }
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    handleOnSubmit = (event) => {
        let formData = new FormData();
        formData.append('name', this.state.name);
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
            this.props.store.dispatch()
        }
        });
        event.preventDefault();
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
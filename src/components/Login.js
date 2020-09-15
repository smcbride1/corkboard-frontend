import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import Button from './Button.js';
import Submit from './Submit.js';
import InputText from './InputText.js';
import * as actions from '../actions.js';

export class Login extends Component {
    constructor() {
        super();
        this.state = {
            error: false,
            errorMessage: ""
        }
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append('email', document.getElementById("email-input").value);
        formData.append('password', document.getElementById("password-input").value);

        fetch('http://localhost:4000/login', {
        method: 'POST', // or 'PUT'
        body: formData,
        credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
        if (data.error) {
            this.setState({error: true});
            this.setState({errorMessage: data.message});
        } else {
            this.props.setUser(data);
            this.props.setLoggedIn(true);
            window.location.href = "/boards";
        }
        });
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
                        <input id="email-input" type="text"></input>
                        <p>Password</p>
                        <input id="password-input" type="password"></input>
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

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.user.name,
        email: state.user.email,
        loggedIn: state.user.loggedIn
    };
};
   
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setUser: (user) => dispatch(actions.setUser(user)),
        setUserName: (name) => dispatch(actions.setUserName(name)),
        setUserEmail: (email) => dispatch(actions.setUserEmail(email)),
        setLoggedIn: (loggedIn) => dispatch(actions.setLoggedIn(loggedIn))
    };
};
   
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
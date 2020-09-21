import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import Button from './Button.js';
import Submit from './Submit.js';
import InputText from './InputText.js';
import * as actions from '../actions.js';

export class Register extends Component {
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
        formData.append('user[name]', document.getElementById("name-input").value);
        formData.append('user[email]', document.getElementById("email-input").value);
        formData.append('user[password]', document.getElementById("password-input").value);

        fetch('http://localhost:4000/users', {
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
                    <h1>Register</h1>
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
                        <p>Name</p>
                        <input id="name-input" type="text"></input>
                        <p>Email</p>
                        <input id="email-input" type="text"></input>
                        <p>Password</p>
                        <input id="password-input" type="password"></input>
                        <br/>
                        <br/>
                        <Submit value="Register"></Submit>
                    </form>
                    <Button type="link" text="Login" path="/login"></Button>
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
        setLoggedIn: (loggedIn) => dispatch(actions.setLoggedIn(loggedIn))
    };
};
   
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);
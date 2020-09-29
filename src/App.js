import React, {Component, Fragment} from 'react';
import {Form, Button, Image, Col } from 'react-bootstrap';
import intlTelInput from 'intl-tel-input';
import Logo from './img/logo.png'
import './App.css';
import './intlTelInput.min.css';

class App extends Component {
    constructor() {
        super();
        this.state = { view:"signin" };
    }
    componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://dev.webircle.com/static_files/public/intlTelInput.js";

        document.body.appendChild(script);
        let input = document.querySelector("#formBasicPhone");
        intlTelInput(input, {
            separateDialCode: true,
            initialCountry: "IN",
        });
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <Image src={Logo} className="mx-auto d-block logo" />
                        <div className="title">
                            <b>Secure Payment</b>
                        </div>
                        <div id="signin" style={{display: this.state.view ? 'block' : 'none' }}>
                            <div className="grid-container">
                                <div className="active" >
                                    Login
                                </div>
                                <div onClick={() => this.setState({ view: 0})}>
                                    Sign Up
                                </div>
                            </div>
                            <Form className="form-signin">
                            <Form.Group controlId="formBasicPhone">
                                <Form.Control type="tel" placeholder="Enter Phone No" />
                            </Form.Group>
                            <Button className="LoginOTP" type="submit" block>
                                Login with OTP
                            </Button>
                            or
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" style={{"margin":"0"}}>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div className="pull-right">
                                Forgot password?
                            </div>
                            <Button className="Login" type="submit" block>
                                Login
                            </Button>
                            or
                            <Button className="LoginFB" type="submit" block>
                                <i className="fa fa-facebook-square"></i> Facebook
                            </Button>
                            <Button variant="light" type="submit" block>
                                <Image src="https://www.google.com/favicon.ico" width="22px"/> Google
                            </Button>
                            <div className="bottom-text" >
                            <small>By checking 'Log In', 'Facebook' or 'Google' you agree
                            to the 'Parama fashion' Term of use and Privacy Policy.
                            This site is protected by 'reCAPTHA' and the 'Google'
                                Privacy Policy and Terms of Service apply.</small>
                            </div>
                        </Form>
                        </div>
                        <div id="signup" style={{display: this.state.view ? 'none' : 'block' }}>
                            <div className="grid-container">
                                <div onClick={() => this.setState({ view: "signin"})}>
                                    Login
                                </div>
                                <div className="active">
                                    Sign Up
                                </div>
                            </div>
                            <Form className="form-signup">
                                <Form.Group controlId="formBasicPhone">
                                    <Form.Row>
                                        <Col>
                                            <Form.Control placeholder="First name" />
                                        </Col>
                                        <Col>
                                            <Form.Control placeholder="Last name" />
                                        </Col>
                                    </Form.Row>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword" >
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword" >
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control type="date" placeholder="Dob" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword" >
                                    <Form.Check type="radio" inline name="gender" label="Female" />
                                    <Form.Check type="radio" inline name="gender" label="Male" />
                                </Form.Group>
                                <Button className="Register" type="submit" block>
                                    Register
                                </Button>
                                <Form.Group controlId="formBasicPassword" >
                                    <Form.Check type="checkbox" label="Subscribe newsletter" />
                                </Form.Group>
                                <div className="bottom-text" >
                                    <small>By checking 'Register', you agree to the 'Parama
                                        fashion' Term of use and Privacy Policy.</small>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
		
    }
	
	
}

export default App;

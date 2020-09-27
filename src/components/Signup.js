import React, { Component } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import logo from '../images/logo.svg'
import TriBallsLoader from './Loader'

export default class Signup extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            name: '',
            registered: false,
            msg: '',
        }
    }

    handleEmailChange(e) {
        this.setState({
            registered: false,
            email: e.target.value
        })
    }

    handleNameChange(e) {
        this.setState({
            registered: false,
            name: e.target.value
        })
    }

    handleClick() {
        const {email, name} = this.state

        this.setState({
            email: '',
            name: ''
        })

        if (email === '' || name === '') {
            this.setState({
                registered: true,
                msg: 'Please enter your email and name.'
            })
            return
        }

        axios.post('https://us-central1-dataearn-registration.cloudfunctions.net/app', {
            email: email,
            name: name
        })
        .then(res => {
            const {success, message} = res.data
            console.log(res)
            if (success) {
                this.setState({
                    registered: true,
                    msg: `Thank you ${message} for signing up.`
                })
            } else {
                this.setState({
                    registered: true,
                    msg: message
                })
            }
        })
        .catch(error => {
            console.log('Error' + error);
        })
    }

    render() {
        return (
            <div className='signup-form'>
                <div className='logo-container'>
                    <img src={logo} className='logo' alt=""/>
                </div>
                <div className='info'>
                    Our website is under construction!
                    <br/>Sign up now for updates.
                </div>
                {/* <TriBallsLoader/> */}
                <Form className='signup-input'>
                    <Form.Group controlId="name">
                        {/* <Form.Label>Name</Form.Label> */}
                        <Form.Control 
                            type="text" 
                            placeholder="Name" 
                            value={this.state.name} 
                            onChange={this.handleNameChange.bind(this)}
                        />
                    </Form.Group>
                    <Form.Group controlId="email">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control 
                            type="email" 
                            placeholder="Email" 
                            value={this.state.email} 
                            onChange={this.handleEmailChange.bind(this)}
                        />
                        {(this.state.registered) ? 
                            <Form.Text className="text-msg">
                                {this.state.msg}
                            </Form.Text> : 
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>}
                    </Form.Group>
                    <Button variant="primary" onClick={this.handleClick.bind(this)}>Get Updates</Button>
                </Form>
            </div>
        )
    }
}
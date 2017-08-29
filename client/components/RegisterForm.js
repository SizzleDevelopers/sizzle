//name, email and phone


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { registerUser, registerError } from '../actions/register'
import ErrorMessage from './ErrorMessage'

class RegisterForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      name: '',
      address: '',
      email: '',
      phone: '',
      password: '',
      confirm: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleClick (event) {
    const { username, name, address, email, phone, password, confirm, } = this.state
    if (password !== confirm) {
      this.props.registerError('Passwords do not match!')
      return
    }
    const creds = {
      username: username.trim(),
      name: name.trim(),
      address: address.trim(),
      email: email.trim(),
      phone: phone.trim(),
      password: password.trim()
    }
    this.props.registerUser(creds)
  }

  render () {
    const { username, name, address, email, phone, password, confirm } = this.state
    return (
      <div>
        <p><input name='username' placeholder='Username'
          onChange={this.handleChange} value={username} /></p>

        <p><input name= 'name' placeholder='First Name,Last Name'
          onChange={this.handleChange} value={name} /></p>

        <p><input name= 'address' placeholder='Address'
          onChange={this.handleChange} value={address} /></p>

        <p><input name= 'email' placeholder='E-mail'
          onChange={this.handleChange} value={email} /></p>

        <p><input name= 'phone' placeholder='Contact Number'
            onChange={this.handleChange} value={phone} /></p>

        <p><input type='password' name='password' placeholder='Password'
          onChange={this.handleChange} value={password} /></p>

        <p><input type='password' name='confirm' placeholder='Confirm'
          onChange={this.handleChange} value={confirm} /></p>
          <Link to='MainPage'>
            <button onClick={(e) => this.handleClick(e)}>
              Register
            </button>
          </Link>

        <ErrorMessage reducer='auth' />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (creds) => {
      return dispatch(registerUser(creds))
    },
    registerError: (message) => {
      dispatch(registerError(message))
    }
  }
}

export default connect(null, mapDispatchToProps)(RegisterForm)

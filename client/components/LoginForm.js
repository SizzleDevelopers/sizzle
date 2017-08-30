import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../actions/auth'
import ErrorMessage from './ErrorMessage'
import {ButtonToolbar, Button, Grid, Row, Col} from 'react-bootstrap'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleClick() {
    const {username, password} = this.state
    const creds = {
      username: username.trim(),
      password: password.trim()
    }
    this.props.loginUser(creds, () => {
      this.props.history.push('/MainPage')
    })
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className='loginForm'>
            <Col xs={1} md={4}></Col>
            <Col xs={4} md={4}>
              <p><input name='username' onChange={this.handleChange} placeholder='Username'/></p>
              <p><input type='password' name='password' onChange={this.handleChange} placeholder='Password'/></p>
              <ButtonToolbar>
                <Button onClick={this.handleClick} bsStyle="primary" bsSize="large" className="btn btn-primary">Login</Button>
              </ButtonToolbar>
              <ErrorMessage reducer='auth'/>
            </Col>
            <Col xs={1} md={4}></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (creds, callback) => {
      return dispatch(loginUser(creds, callback))
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)

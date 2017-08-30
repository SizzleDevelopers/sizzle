import React from 'react'
import {connect} from 'react-redux'
import {Route, withRouter} from 'react-router-dom'
import {ButtonToolbar, Button, Grid, Row, Col} from 'react-bootstrap'
import Links from './Links'
import Logout from './Logout'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const Navbar = ({isAuthenticated, history}) => {
return (
  <nav>
    {!isAuthenticated && (
      <div>
        <Route exact path='/' render={() => (<Links active='Home'/>)}/>
        <Route path='/login' render={() => (
          <div>
            <Links active='Login'/>
            <LoginForm history={history}/>
          </div>
          )}/>
        <Route path='/register' render={() => (
          <div>
            <Links active='Register'/>
            <RegisterForm/>
          </div>
        )}/>
      </div>
    )}
    {isAuthenticated && <Logout/> }
  </nav>
)
}

const mapStateToProps = (state) => {
  return {isAuthenticated: state.auth.isAuthenticated}
}

export default withRouter(connect(mapStateToProps)(Navbar))

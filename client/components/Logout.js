import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/auth'
import {
  DropdownButton,
  ButtonToolbar,
  Button,
  Grid,
  Row,
  Col,
  MenuItem
} from 'react-bootstrap'

const Logout = (props) => {
  return (
    <Row>
    <Link to='/'>
      <ButtonToolbar>
      <Button onClick={props.logoutUser}>
        Logout
      </Button>
        </ButtonToolbar>
    </Link>
  </Row>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    }
  }
}

export default connect(null, mapDispatchToProps)(Logout)

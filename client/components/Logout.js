import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/auth'
import {DropdownButton,ButtonToolbar,Button,Grid,Row,Col,MenuItem} from 'react-bootstrap'

const Logout = (props) => {
  return (
    <Grid>
      <Row>
        <Col className="pageNav-col" sm={6} md={4} lg={6}>
          <Link to='/'>
            <ButtonToolbar>
              <Button onClick={props.logoutUser}>Logout</Button>
            </ButtonToolbar>
          </Link>
        </Col>
      </Row>
    </Grid>
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

import React from 'react'
import {ButtonToolbar, Button, Grid, Row, Col} from 'react-bootstrap'
import Logo from "./Logo"
import jump from 'jump.js'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import MakeResource from './MakeResource'

export default function MainPage() {
  return (
    <div className='mainPageButtons' id='mainPageButtons'>
      <div><br></br></div>
      <Grid style={{
        margin: '0 auto'
      }}>
        <Row className='makeEventButton'>
          <Col xs={1} md={4}></Col>
          <Col xs={4} md={4}>
            <Link to='/event'>
              <ButtonToolbar>
                <Button bsStyle="primary" bsSize="large" className="btn btn-primary" block>Make Event</Button>
              </ButtonToolbar>
            </Link>
          </Col>
          <Col xs={1} md={4}></Col>
        </Row>
        <div>
          <br></br>
        </div>
        <Row className='manageEventButton'>
          <Col xs={1} md={4}></Col>
          <Col xs={4} md={4}>
            <Link to='/eventlist'>
              <ButtonToolbar>
                <Button bsStyle="primary" bsSize="large" className="btn btn-primary" block>Manage Event</Button>
              </ButtonToolbar>
            </Link>
          </Col>
          <Col xs={1} md={4}></Col>
        </Row>
        <div>
          <br></br>
        </div>
        <Row className='makeResourceButton'>
          <Col xs={1} md={4}></Col>
          <Col xs={4} md={4}>
            <Link to='/makeResource'>
              <ButtonToolbar>
                <Button bsStyle="primary" bsSize="large" className="btn btn-primary" block>Make Resource</Button>
              </ButtonToolbar>
            </Link>
          </Col>
          <Col xs={1} md={4}></Col>
        </Row>
        <div>
          <br></br>
        </div>
        <Row className='manageResourcesButton'>
          <Col xs={1} md={4}></Col>
          <Col xs={4} md={4}>
            <Link to='/manageResources'>
              <ButtonToolbar>
                <Button bsStyle="primary" bsSize="large" className="btn btn-primary" block>Manage Resource</Button>
              </ButtonToolbar>
            </Link>
          </Col>
          <Col xs={1} md={4}></Col>
        </Row>
      </Grid>
    </div>
  )
}

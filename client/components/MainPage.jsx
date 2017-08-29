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
      <Logo/>
        <Grid>
          <Row className='makeEventButton'>
            <Col className="pageNav-col" sm={6} md={4} lg={6}>
              <Link to='/event'>
                <ButtonToolbar>
                  <Button bsStyle="primary" bsSize="large" className="btn btn-primary">Make Event</Button>
                </ButtonToolbar>
              </Link>
            </Col>
          </Row>
          <Row className='manageEventButton'>
            <Col className="pageNav-col" sm={6} md={4} lg={6}>
              <Link to='/eventlist'>
                <ButtonToolbar>
                  <Button bsStyle="primary" bsSize="large" className="btn btn-primary">Manage Event</Button>
                </ButtonToolbar>
              </Link>
            </Col>
          </Row>
          <Row className='makeResourceButton'>
            <Col className="pageNav-col" sm={6} md={4} lg={6}>
              <Link to='/makeResource'>
                <ButtonToolbar>
                  <Button bsStyle="primary" bsSize="large" className="btn btn-primary">Make Resource</Button>
                </ButtonToolbar>
              </Link>
            </Col>
          </Row>
          <Row className='manageResourcesButton'>
            <Col className="pageNav-col" sm={6} md={4} lg={6}>
              <Link to='/manageResources'>
                <ButtonToolbar>
                  <Button bsStyle="primary" bsSize="large" className="btn btn-primary">Manage Resource</Button>
                </ButtonToolbar>
              </Link>
            </Col>
          </Row>
        </Grid>
    </div>
  )
}

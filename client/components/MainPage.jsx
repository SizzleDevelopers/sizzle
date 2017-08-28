import React from 'react'
import {Grid, Row, Col, Input, Container} from 'react-bootstrap'
import jump from 'jump.js'
import {Link} from 'react-router-dom'
import MakeResource from './MakeResource'

export default function MainPage() {
  return (
    <div>
      <Grid>
        <Row>
          <Link to='/event'>
            <button type="button" className="btn btn-primary">Make Event</button>
          </Link>
        </Row>
        <Row>
          <Link to='/eventlist'>
            <button type="button" className="btn btn-primary">Manage Event</button>
          </Link>
        </Row>
        <Row>
          <Link to='/MakeResource'>
            <button type="button" className="btn btn-primary">Make Resource</button>
          </Link>
        </Row>
        <Row>
          <Link to='/ManageResources'>
            <button type="button" className="btn btn-primary">Manage Resource</button>
          </Link>
        </Row>
      </Grid>
    </div>
  )
}

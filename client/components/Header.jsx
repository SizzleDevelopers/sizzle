import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import Logo from './Logo'
import Navbar from './Navbar'

const Header = (props) => {
  return (
    <div className='header'>
      <Grid>
        <Row>
          <Col xs={6}>
            <Logo text-left />
          </Col>
          <Col xs={6}>
            <div className='text-right'>
              <Navbar />
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Header

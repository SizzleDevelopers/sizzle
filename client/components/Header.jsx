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
          </Col>
        </Row>
      </Grid>
      <div className='nav'>
        <Navbar />
      </div>
    </div>
  )
}

export default Header
//options for register and login only works
//if Navbar is been passed in Header.jsx
//why it doesnt work if not in the Header.jsx?

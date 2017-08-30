import React from 'react'
import {Link} from 'react-router-dom'
import {ButtonToolbar, Button, Grid, Row, Col} from 'react-bootstrap'

const Links = ({active}) => {
  return (
    <div>
      <Grid>
        <Row>
          {active === 'Register'
            ? 'Register'
            : <Link to='/register'>Register</Link>}| {active === 'Login'
            ? 'Login'
            : <Link to='/login'>Login</Link>}
        </Row>
      </Grid>
    </div>
  )
}

export default Links

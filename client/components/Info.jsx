import React from 'react'
import {Grid,Row,Col,Input,Container} from 'react-bootstrap'
import jump from 'jump.js'

const Info = () => {
  return (
    <div>

        <Grid  className="Info">
          <Row>
            <Col xs={1} md={4}></Col>
            <Col xs={4} md={4}>
              <h1>Info</h1>
              <div className='info'>
              <p>Sizzle was created with the aim of encouraging people not to
                waste food and make it an action where you provide some resource
                between food, skill or a kitchen to prepare the food that is made available.
                You can choose to create an event and offer a resource or you can choose from
                existing events and join them and offer the resource you have available.
                You and your event mates will decide how to divide the final product, you
                can choose between consuming, donating to some institution, selling, it will
                really be the choice of you. We are grateful for your
                help in avoiding food waste, thank you.</p>

            <p>Love,</p>
            <p>Team Sizzle.</p>
            </div>
          </Col>
          <Col xs={1} md={4}></Col>
        </Row>
      </Grid>

    </div>
  )
}
export default Info

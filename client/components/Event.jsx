import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Input, Panel, Button } from 'react-bootstrap'
import { removeEvent } from '../actions/events'


export class Event extends React.Component {
  constructor(props) {
    super(props)
  }

  onDeleteLinkClicked() {
    this.props.dispatch(removeEvent(this.props.event))
  }

  onRedirect(e) {
    window.location = `/#/manageevent/${this.props.event.id}`
  }

  render() {
    let event = this.props.event
    return (
      <Row>
        <Panel className='event'>
          <Grid>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <Row>
              <div className='text-right'>
                <Col>
                  <Button style={{ marginRight: '3rem' }} bsStyle='danger' onClick={this.onDeleteLinkClicked.bind(this)}>Delete</Button>
                  <Button style={{marginRight: '3rem'}} bsStyle='success' onClick={this.onRedirect.bind(this)}>Manage</Button>
                </Col>
              </div>
            </Row>
          </Grid>
        </Panel>
      </Row>
    )
  }
}

export default connect()(Event)

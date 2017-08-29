import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Input, Container } from 'react-bootstrap'
import { removeEvent } from '../actions/events'


export class Event extends React.Component {
  constructor(props) {
    super(props)
  }

  onDeleteLinkClicked() {
    this.props.dispatch(removeEvent(this.props.event))
  }

  render() {
    let event = this.props.event
    return (
      <Row>
        <div className='event'>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </div>
        {'     '}
        <a onClick={this.onDeleteLinkClicked.bind(this)}>Delete</a>
          {'     '}
          <a href={`/#/manageevent/${event.id}`}>Manage</a>
      </Row>
    )
  }
}
export default connect()(Event)

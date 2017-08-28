import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Grid, Row, Col, Input, Container } from 'react-bootstrap'

import { createEvent } from '../actions/events'
import Logo from '../components/Logo'
import Event from '../components/Event'

export class EventList extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className='event'>
        <Logo />
        <Grid>
          <h2>Events</h2>
          {this.props.events.map((event) => 
            <Event event={event} />
          )}
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps)(EventList)

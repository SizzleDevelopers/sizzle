import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'
import {getEvents} from '../actions/events'
import Logo from '../components/Logo'
import Event from '../components/Event'

export class EventList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getEvents())
  }

  render() {
    return (
      <div className='events'>
        <Logo/>
        <Grid>
          <h2>Events</h2>
          {this.props.events.map((event, i) => <Event key={i} event={event}/>)}
          <Link to='/MainPage'>
            <button type="button" className="btn btn-primary">Home</button>
          </Link>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {events: state.events}
}

export default connect(mapStateToProps)(EventList)

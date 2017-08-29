import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Grid, Row, Col, FormGroup, FormControl } from 'react-bootstrap'
import { createEvent } from '../actions/events'
import Logo from '../components/Logo'

export class EventPage extends React.Component {
  constructor(props) {
    super(props)
    const now = new Date()
    const dateString = `${now.getFullYear()}-${String('0' + (now.getMonth() + 1)).slice(-2)}-${now.getDate()}`

    this.state = {
      title: '',
      description: '',
      user_id: null,
      date: dateString,
      is_am: true,
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    const newEvent = { ...this.state }
    newEvent.user_id = this.props.user.id
    this.props.dispatch(createEvent(newEvent), this.props.history.push('/eventlist'))
  }

  render() {
    return (
      <div className='event'>
        <Logo />
        <Grid>
          <h2>Start a sizzle</h2>
          <form onSubmit={this.onSubmit.bind(this)}>
            <Row>
              <input type='text' name='title' placeholder='Please enter title' onChange={this.onChange.bind(this)} />
            </Row>
            <Row>
              <input type='text' name='description' placeholder='Please enter description' onChange={this.onChange.bind(this)} />
            </Row>
            <Row>
              <input type="date" name='date' value={this.state.date} onChange={this.onChange.bind(this)} />
              <select name='is_am' onChange={this.onChange.bind(this)}>
                <option value='true'>AM</option>
                <option value='false'>PM</option>
              </select>
            </Row>
            <Row>
              <Link to='/EventList'>
                <button type='button' onClick={this.onSubmit.bind(this)}>Sizzle!</button>
              </Link>
            </Row>
          </form>
          <Row>
            <Link to='/MainPage'>
              <button type="button" className="btn btn-primary">Home</button>
            </Link>
          </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(EventPage)

import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'
import {createEvent} from '../actions/events'
import Logo from '../components/Logo'

export class EventPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      host: null,
      date: new Date(),
      is_am: true
    }
  }

  onChange(e) {
    let value = e.target.value
    if (e.target.name === 'date')
      value = new Date(value)

    this.setState({
      [e.target.name]: value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.dispatch(createEvent(this.state))
  }

  render() {
    return (
      <div className='event'>
        <Logo/>
        <Grid>
          <h2>Start a sizzle</h2>
          <form onSubmit={this.onSubmit.bind(this)}>
            <Row>
              <input type='text' name='title' placeholder='Please enter title' onChange={this.onChange.bind(this)}/>
            </Row>
            <Row>
              <input type='text' name='description' placeholder='Please enter description' onChange={this.onChange.bind(this)}/>
            </Row>
            <Row>
              <input type="text" name='date' placeholder='DD/MMM/YYYY' onChange={this.onChange.bind(this)}/>
              <select name='is_am' onChange={this.onChange.bind(this)}>
                <option value='true'>AM</option>
                <option value='false'>PM</option>
              </select>
            </Row>
            <Row>
              <Link to='EventList'>
                <button type='submit'>Sizzle!</button>
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
  return {ingredients: state.ingredients, locations: state.locations, skills: state.skills}
}

export default connect(mapStateToProps)(EventPage)

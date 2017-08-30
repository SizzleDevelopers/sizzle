import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Grid, Row, Col, ControlLabel, HelpBlock, FormGroup, FormControl, Button } from 'react-bootstrap'
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

  FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    )
  }

  render() {
    return (
      <div className='event'>
        <Grid>
          <Row>
            <h2>Start a sizzle</h2>
          </Row>
          <Row>
            <Col xs={8} xsOffset={2}>
              <form >
                <this.FieldGroup id='title' name='title' type='text' label='Title' placeholder='Please enter title' value={this.state.title} onChange={this.onChange.bind(this)} />
                <this.FieldGroup id='description' name='description' type='text' label='Description' value={this.state.description} placeholder='Please enter description' onChange={this.onChange.bind(this)} />
                <FormGroup controlId='date'>
                  <ControlLabel>Date</ControlLabel>
                  <FormGroup controlId='date-inner'>
                    <Col xs={3}>
                      <FormControl style={{ marginLeft: '-15px' }} type="date" name='date' value={this.state.date} onChange={this.onChange.bind(this)} />
                    </Col>
                    <Col xs={2}>
                      <FormControl componentClass='select' name='is_am' value={this.state.is_am} onChange={this.onChange.bind(this)}>
                        <option value={true}>AM</option>
                        <option value={false}>PM</option>
                      </FormControl>
                    </Col>
                  </FormGroup>
                </FormGroup>
              </form>
            </Col>
          </Row>
          <Row>
            <Link to='/EventList' >
              <Button type='button' style={{ marginTop: '2rem' }} onClick={this.onSubmit.bind(this)}>Sizzle!</Button>
            </Link>
          </Row>
          <Row>
            <Link to='/MainPage'>
              <Button type="button" style={{ marginTop: '2rem' }} className="btn btn-primary">Home</Button>
            </Link>
          </Row>

        </Grid>
      </div >
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(EventPage)

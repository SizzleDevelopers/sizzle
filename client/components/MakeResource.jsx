import React from 'react'
import {connect} from 'react-redux'
import {
  DropdownButton,
  ButtonToolbar,
  Button,
  Grid,
  Row,
  Col,
  MenuItem
} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {postResource} from '../actions/resources'

class MakeResource extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      type: null
    }
    this.validTypes = ['resource', 'skill', 'location']
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleDropdownChange(value) {
    console.log({value});
    this.setState({type: value})
  }
  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault()
    this.props.dispatch(postResource(this.state, () => {
      this.props.history.push('/eventlist')
    }))
  }

  render() {
    return (
      <div className='makeResourcePage'>
        <Grid>
          <h1>Make Resource</h1>
          <Row className='makeResourceButtons'>
            <Col className="pageNav-col" sm={6} md={4} lg={6}>
              <div className='form-group'>
                <input type='text' className="form-control" name='title' placeholder='Resource name' value={this.state.title} onChange={this.handleChange.bind(this)}/>
              <ButtonToolbar>
                <DropdownButton name='type' className="form-control" name='title' placeholder='Resource name' title={this.state.type || "Resource Type"} onChange={this.handleChange.bind(this)}>
                  {this.validTypes.map((type, i) => (
                    <MenuItem eventKey={i} key={i} onClick={() => this.handleDropdownChange(type)} value={type}>{type}</MenuItem>
                  ))}
                </DropdownButton>
                  <Button  onClick={this.handleSubmit.bind(this)}  className="btn btn-primary">Save</Button>
                </ButtonToolbar>
              </div>
            </Col>
          </Row>
          <Link to='/MainPage'>
            <ButtonToolbar>
              <Button bsStyle="primary" bsSize="large" className="btn btn-primary">Home</Button>
            </ButtonToolbar>
          </Link>
        </Grid>
      </div>
    )
  }
}

function matchStateToProps(state) {
  return {resource: state.resource}
}

export default connect(matchStateToProps)(MakeResource)

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {postResource} from '../actions/resources'

class MakeResource extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      type: ''
    }
    this.validTypes = ['resource', 'skill', 'location']
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(postResource(this.state, () => {
      this.props.history.push('/eventlist')
    }))
  }

  render() {
    return (
      <div>
        <h1>Make Resource</h1>
        <div className='form-group'>
          <input type='text' className="form-control" name='title' placeholder='Resource name' value={this.state.title} onChange={this.handleChange.bind(this)}/>
          <select name='type' onChange={this.handleChange.bind(this)}>
            <option value=''>Select type</option>
            {this.validTypes.map((type, i) => (
              <option key={i} value={type}>{type}</option>
            ))}
          </select>
          <button onClick={this.handleSubmit.bind(this)}>Save</button>
        </div>
        <Link to='/MainPage'>
          <button type="button" className="btn btn-primary">Home</button>
        </Link>
      </div>
    )
  }
}

function matchStateToProps(state) {
  return {resource: state.resource}
}

export default connect(matchStateToProps)(MakeResource)

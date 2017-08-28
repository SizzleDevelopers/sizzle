{/* jsx comment */}

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
    this.resourceTypes = ['tomato', 'chicken', 'cheese'],
    this.skillTypes = ['baking', 'fishmonger', 'masterchef'],
    this.locationTypes = ['johnsonville', 'karori', 'miramar']
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(postResource(this.state))
  }

  render() {
    return (
      <div>
        <h2>Make Resource</h2>
        <div className='form-group'>

          {/* resources */}
          <select name='resources' onChange={this.handleChange.bind(this)}>
            <option value=''>Select resource</option>
            {this.resourceTypes.map((type, i) => (
              <option key={i} value={type}>{type}</option>
            ))}
          </select>

          <button onClick={this.handleSubmit.bind(this)}>Add</button>
          <break>  </break>

          {/* skills */}
          <select name='skills' onChange={this.handleChange.bind(this)}>
            <option value=''>Select skill</option>
            {this.skillTypes.map((type, i) => (
              <option key={i} value={type}>{type}</option>
            ))}
          </select>

          <button onClick={this.handleSubmit.bind(this)}>Add</button>
          <break>  </break>

          {/* locations */}
          <select name='locations' onChange={this.handleChange.bind(this)}>
            <option value=''>Select location</option>
            {this.locationTypes.map((type, i) => (
              <option key={i} value={type}>{type}</option>
            ))}
          </select>


          <button onClick={this.handleSubmit.bind(this)}>Add</button>
          <break>  </break>

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

import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Logo from '../components/Logo'
import Ingredients from '../components/Ingredients'
import Skills from '../components/Skills'
import Locations from '../components/Locations'
import {postAttendance} from '../actions/attendance'

class DataEntryPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredient_id: null,
      skill_id:null,
      location_id: null,
      kg:null
    }
  }

  handleSave(e) {
    let exampleState = {
      ingrendient_id: 3,
      skill_id: null,
      location_id: undefined
    }
    this.props.dispatch(postAttendance(this.state))
    //dispatch an action
  }

  render() {
    return (
      <div>
        <Logo />
        <Ingredients onSelect={(ingredient_id) => this.setState({ingredient_id})}/>
        <Skills onSelect={(skill_id) => this.setState({skill_id})}/>
        <Locations onSelect={(location_id) => this.setState({location_id})}/>
        <button onClick={this.handleSave.bind(this)}>save</button>
        <Link to='/'>
           <button type="button" className="btn btn-primary">Home</button>
         </Link>
      </div>
    )
  }
}

export default connect()(DataEntryPage)

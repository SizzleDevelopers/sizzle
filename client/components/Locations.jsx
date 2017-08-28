import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getLocations} from '../actions/locations'

class Locations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      showOptions: false
    }
  }
  componentDidMount() {
    this.props.dispatch(getLocations())
  }
  selectLocation(location) {
    this.setState({search: location})
  }
  updateSearch(e) {
    let showOptions = true
    if (e.target.value.length != 0) showOptions =  false

    this.setState({[e.target.name]: e.target.value, showOptions})
  }
  toggleShowOptions(e) {
    this.setState({showOptions: !this.state.showOptions, search: ''})
  }

render() {
  let {search, showOptions} = this.state
  let {locations} = this.props

  const filterFunction = (location) => {
    let {facility, address} = location
    return ((address.toLowerCase().includes(search.toLowerCase()) && address != search) || facility.toLowerCase().includes(search.toLowerCase()))
  }
  let filteredLocations = locations.filter(filterFunction)

  return (
    <div className='form-group'>
      <input type='text' className="form-control" name='search' placeholder='location' value={search} onChange={this.updateSearch.bind(this)}/>
      <button onClick={this.toggleShowOptions.bind(this)}>{showOptions ? 'Hide' : 'Show'}</button>
        {(showOptions || (search.length != 0 && !locations.find(({location}) => location == search)))
        &&
        <div className="locationSearchResults" style={{height: '15vh', overflow: 'scroll'}}>

        {filteredLocations.map((location, i) => (
          <p onClick={() => this.selectLocation(location.address)} key={i}>{location.facility} @ {location.address}</p>
        ))}
        </div>
        }
      <Link to="/">Go Home</Link>
    </div>
  )
 }
}
function matchStateToProps(state) {
  return {locations: state.locations}
}

export default connect(matchStateToProps)(Locations)

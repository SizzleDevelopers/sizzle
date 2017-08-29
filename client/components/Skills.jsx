import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getSkills} from '../actions/skills'

class Skills extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      showOptions: false
    }
  }
  componentDidMount() {
    this.props.dispatch(getSkills())
  }
  selectSkills(skill) {
    this.setState({search: skill})
  }
  updateSearch(e) {
    let showOptions = true
    if(e.target.value.length != 0) showOptions = false
    this.setState({[e.target.name]: e.target.value, showOptions})
  }
  toggleShowOptions(e) {
    this.setState({showOptions: !this.state.showOptions, search: ''})
  }

render() {
  let {search, showOptions} = this.state
  let {skills} = this.props

  let filteredSkills = skills.filter(({skill}) => skill.toLowerCase().includes(search.toLowerCase()) && skill != search)

  return (
    <div className='form-group'>
        <input type='text' className="form-control" name='search' placeholder='Skill' value={search} onChange={this.updateSearch.bind(this)}/>
        <button onClick={this.toggleShowOptions.bind(this)}>{showOptions ? 'Hide' : 'Show'}</button>
          {(showOptions || (search.length != 0 && !skills.find(({skill}) => skill == search)))
          &&
          <div className="skillSearchResults" style={{height: '15vh', overflow: 'scroll'}}>
          {filteredSkills.map(({skill}, i) => (
            <p onClick={() => this.selectSkills(skill)} key={i}>{skill}</p>
          ))}
        </div>
        }
        <Link to='/'>home</Link>
      </div>
    )
   }
  }
function matchStateToProps(state) {
  return {skills: state.skills}
}

export default connect(matchStateToProps)(Skills)

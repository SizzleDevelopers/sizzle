import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { connect } from 'react-redux'
import Resources from '../components/MakeResource'

export class ManageEventPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resources: []
    }
  }

  renderLocationOptions() {
    const unselected = [(<option disabled selected value>Select a location</option>)]
    const locations = this.props.locations.filter((ingredient) => !ingredient.event_id == null)
      .map((location) => {
        return (
          <option value={location.id}>{`${location.title}`}</option>
        )
      })

    const selectedLocation = this.props.locations.find((location) => location.event_id == this.props.event_id)
    if (selectedLocation) {
      const selectedLocationOption = (<option selected value={selectedLocation.id}>{`${selectedLocation.title}`}</option>)
      return [selectedLocationOption, ...locations]
    }

    return [...unselected, ...locations]
  }
  
  renderIngredientOptions() {
    const unselected = [(<option disabled selected value>Select an ingredient</option>)]
    const ingredients = this.props.ingredients.filter((ingredient) => !ingredient.event_id == null)
      .map((ingredient) => {
        return (
          <option value={ingredient.id}>{`${ingredient.title} - ${ingredient.kg}`}</option>
        )
      })

    const selectedIngredient = this.props.ingredients.find((ingredient) => ingredient.event_id == this.props.event_id)
    if (selectedIngredient) {
      const selectedIngredientOption = (<option selected value={selectedIngredient.id}>{`${selectedIngredient.title} - ${selectedIngredient.kg}`}</option>)
      return [selectedIngredientOption, ...ingredients]
    }

    return [...unselected, ...ingredients]
  }

  renderSkillOptions() {
    const unselected = [(<option disabled selected value>Select a skill</option>)]
    const skills = this.props.skills.filter((skill) => !skill.event_id == null)
      .map((skill) => {
        return (
          <option value={skill.id}>{`${skill.title}`}</option>
        )
      })

    const selectedSkill = this.props.skills.find((skill) => skill.event_id == this.props.event_id)
    if (selectedSkill) {
      const selectedSkillOption = (<option selected value={selectedSkill.id}>{`${selectedSkill.title}`}</option>)
      return [selectedSkillOption, ...skills]
    }

    return [...unselected, ...skills]
  }

  render() {
    return (
      <div>
        <Logo />
        <div className='resources'>
          <select name="location" id="">
            {this.renderLocationOptions()}
          </select>
          <select name="ingredient" id="">
            {this.renderIngredientOptions()}
          </select>
          <select name="skill" id="">
            {this.renderSkillOptions()}
          </select>
        </div>
        <Resources />
        <Link to='/'>
          <button type="button" className="btn btn-primary">Home</button>
        </Link>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    ingredients: [{ id: 1, user_id: 1, title: 'apples' }, { id: 2, user_id: 2, title: 'walnuts' }, { id: 3, user_id: 3, title: 'butter' }],
    locations: [{ id: 4, user_id: 4, title: 'strathmore' }, { id: 5, user_id: 5, title: 'newtown' }, { id: 6, user_id: 6, title: 'johnsonville' }],
    skills: [{ id: 7, user_id: 7, title: 'baker' }, { id: 8, user_id: 8, title: 'masterchef' }, { id: 9, user_id: 9, title: 'kitchenhand' }]
  }
}

export default connect(mapStateToProps)(ManageEventPage)

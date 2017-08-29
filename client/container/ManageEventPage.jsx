import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { connect } from 'react-redux'

import { editResource } from '../actions/resources'
import { getResources } from '../actions/manageResource'

export class ManageEventPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredient: null,
      location: null,
      skill: null
    }
  }


  componentDidMount() {
    this.props.dispatch(getResources())
  }

  renderLocationOptions() {
    const unselected = [(<option disabled selected value>Select a location</option>)]
    const locations = this.props.locations.filter((location) => !location.event_id)
      .map((location) => {
        return (
          <option value={location.id}>{`${location.title}`}</option>
        )
      })

    const selectedLocation = this.props.locations.find((location) => location.event_id == this.props.eventId)
    if (selectedLocation) {
      const selectedLocationOption = (<option selected value={selectedLocation.id}>{`${selectedLocation.title}`}</option>)
      return [selectedLocationOption, ...locations]
    }

    return [...unselected, ...locations]
  }

  renderIngredientOptions() {
    const unselected = [(<option disabled selected value>Select an ingredient</option>)]
    const ingredients = this.props.ingredients.filter((ingredient) => !ingredient.event_id)
      .map((ingredient) => {
        return (
          <option value={ingredient.id}>{`${ingredient.title} - ${ingredient.kg}`}</option>
        )
      })

    const selectedIngredient = this.props.ingredients.find((ingredient) => ingredient.event_id == this.props.eventId)
    if (selectedIngredient) {
      const selectedIngredientOption = (<option selected value={selectedIngredient.id}>{`${selectedIngredient.title} - ${selectedIngredient.kg}`}</option>)
      return [selectedIngredientOption, ...ingredients]
    }

    return [...unselected, ...ingredients]
  }

  renderSkillOptions() {
    const unselected = [(<option disabled selected value>Select a skill</option>)]
    const skills = this.props.skills.filter((skill) => !skill.event_id)
      .map((skill) => {
        return (
          <option value={skill.id}>{`${skill.title}`}</option>
        )
      })

    const selectedSkill = this.props.skills.find((skill) => skill.event_id == this.props.eventId)
    if (selectedSkill) {
      const selectedSkillOption = (<option selected value={selectedSkill.id}>{`${selectedSkill.title}`}</option>)
      return [selectedSkillOption, ...skills]
    }

    return [...unselected, ...skills]
  }

  onIngredientChanged(e) {
    const ingredientId = document.getElementById('ingredient').value
    const ingredient = this.props.ingredients.find((i) => i.id == ingredientId)
    if (ingredient)
      this.setState({ ingredient: { ...ingredient, event_id: this.props.eventId } })
  }

  onLocationChanged(e) {
    const locationOption = document.getElementById('location').value
  }

  onSubmit(e) {
    e.preventDefault()
    this.state.ingredient && this.props.dispatch(editResource(this.state.ingredient))
  }

  render() {
    return (
      <div>
        <Logo />
        <form className='resources' onSubmit={this.onSubmit.bind(this)}>
          <select name="location" id="location" onChange={this.onLocationChanged.bind(this)}>
            {this.renderLocationOptions()}
          </select>
          <select name="ingredient" id="ingredient" onChange={this.onIngredientChanged.bind(this)}>
            {this.renderIngredientOptions()}
          </select>
          <select name="skill" id="">
            {this.renderSkillOptions()}
          </select>
          <button type='submit'>Save</button>
        </form>

        <Link to='/MainPage'>
          <button type="button" className="btn btn-primary">Home</button>
        </Link>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    ingredients: state.resources.filter((resource) => resource.type == 'ingredient'),
    locations: state.resources.filter((resource) => resource.type == 'locations'),
    skills: state.resources.filter((resource) => resource.type == 'skills'),
  }
}

export default connect(mapStateToProps)(ManageEventPage)

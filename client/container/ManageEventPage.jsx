import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { connect } from 'react-redux'
import Resources from '../components/MakeResource'

export class ManageEventPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredient: null,
      location: null,
      skill: null
    }
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
    console.log('ingred', ingredientId)
    const ingredient = this.props.ingredients.find((i) => i.id == ingredientId)
    if (ingredient)
      this.setState({ingredient: {...ingredient, event_id: this.props.eventId}})
  }

  onLocationChanged(e) {
    const locationOption = document.getElementById('location').value
    console.log('location', locationOption)
  }

  onSubmit(e) {
    e.preventDefault()
    this.state.ingredient && this.props.dispatch()
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

        <Link to='/'>
          <button type="button" className="btn btn-primary">Home</button>
        </Link>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    ingredients: [{ id: 1, user_id: 1, title: 'apples', event_id: null}, { id: 2, user_id: 2, title: 'walnuts', event_id: null }, { id: 3, user_id: 3, title: 'butter', event_id: null }],
    locations: [{ id: 4, user_id: 4, title: 'strathmore', event_id: null }, { id: 5, user_id: 5, title: 'newtown', event_id: null }, { id: 6, user_id: 6, title: 'johnsonville', event_id: null }],
    skills: [{ id: 7, user_id: 7, title: 'baker', event_id: null }, { id: 8, user_id: 8, title: 'masterchef', event_id: null }, { id: 9, user_id: 9, title: 'kitchenhand', event_id: null }]
  }
}

export default connect(mapStateToProps)(ManageEventPage)

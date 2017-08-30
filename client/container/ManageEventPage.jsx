import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Grid, Row, Col, ControlLabel, HelpBlock, FormGroup, FormControl, Button } from 'react-bootstrap'

import Logo from '../components/Logo'
import { editResource, getResources } from '../actions/resources'

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
      .map((location, i) => {
        return (
          <option key={i} value={location.id}>{`${location.title}`}</option>
        )
      })

    const selectedLocation = this.props.locations.find((location, i) => location.event_id == this.props.eventId)
    if (selectedLocation) {
      const selectedLocationOption = (<option selected value={selectedLocation.id}>{`${selectedLocation.title}`}</option>)
      return [selectedLocationOption, ...locations]
    }

    return [...unselected, ...locations]
  }

  renderIngredientOptions() {
    const unselected = [(<option disabled selected value>Select an ingredient</option>)]
    const ingredients = this.props.ingredients.filter((ingredient) => !ingredient.event_id)
      .map((ingredient, i) => {
        return (
          <option key={i} value={ingredient.id}>{`${ingredient.title} - ${ingredient.kg}`}</option>
        )
      })

    const selectedIngredient = this.props.ingredients.find((ingredient, i) => ingredient.event_id == this.props.eventId)
    if (selectedIngredient) {
      const selectedIngredientOption = (<option selected value={selectedIngredient.id}>{`${selectedIngredient.title} - ${selectedIngredient.kg}`}</option>)
      return [selectedIngredientOption, ...ingredients]
    }

    return [...unselected, ...ingredients]
  }

  renderSkillOptions() {
    const unselected = [(<option disabled selected value>Select a skill</option>)]
    const skills = this.props.skills.filter((skill) => !skill.event_id)
      .map((skill, i) => {
        return (
          <option key={i} value={skill.id}>{`${skill.title}`}</option>
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
    if (ingredient) {
      const updatedIngredient = { ...ingredient, event_id: this.props.eventId }
      this.setState({
        ingredient: updatedIngredient
      })
    }
  }

  onLocationChanged(e) {
    const locationId = e.target.value
    const location = this.props.locations.find((i) => i.id == locationId)
    if (location) {
      const updatedLocation = { ...location, event_id: this.props.eventId }
      this.setState({
        location: updatedLocation
      })
    }
  }

  onSkillChanged(e) {
    const skillId = document.getElementById('skill').value
    const skill = this.props.skills.find((i) => i.id == skillId)
    if (skill) {
      const updatedSkill = { ...skill, event_id: this.props.eventId }
      this.setState({
        skill: updatedSkill
      })
    }
  }

  onSubmit(e) {
    e.preventDefault()
    this.state.ingredient &&
      this.props.dispatch(editResource(this.state.ingredient))
    this.state.location &&
      this.props.dispatch(editResource(this.state.location))
    this.state.skill &&
      this.props.dispatch(editResource(this.state.skill))
    window.location = '/#/eventlist'
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
      <div className='manage-event'>
        <form>
          <Grid>
            <Col xs={8} xsOffset={2}>
              <FormGroup controlId='location'>
                <ControlLabel>Location</ControlLabel>
                <FormControl componentClass='select' name="location" id="location" onChange={this.onLocationChanged.bind(this)}>
                  {this.renderLocationOptions()}
                </FormControl>
              </FormGroup>
              <FormGroup controlId='ingredient'>
                <ControlLabel>Ingredient</ControlLabel>
                <FormControl componentClass='select' name="ingredient" id="ingredient" onChange={this.onIngredientChanged.bind(this)}>
                  {this.renderIngredientOptions()}
                </FormControl>
              </FormGroup>
              <FormGroup controlId='skill'>
                <ControlLabel>Skill</ControlLabel>
                <FormControl componentClass='select' name="skill" id="skill" onChange={this.onSkillChanged.bind(this)}>
                  {this.renderSkillOptions()}
                </FormControl>
              </FormGroup>
              <button type='button' onClick={this.onSubmit.bind(this)}>Save</button>
            </Col>
          </Grid>
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
    locations: state.resources.filter((resource) => resource.type == 'location'),
    skills: state.resources.filter((resource) => resource.type == 'skill'),
  }
}

export default connect(mapStateToProps)(ManageEventPage)

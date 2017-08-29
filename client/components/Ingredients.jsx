import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getIngredients} from '../actions/ingredients'

class Ingredients extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search: '',
      showOptions: false
    }
  }
  componentDidMount() {
    this.props.dispatch(getIngredients())
  }
  selectIngredient(ingredientName) {
    const ingredient = this.props.ingredients.find((ingredient) => ingredient.ingredient == ingredientName)
    this.props.onSelect(ingredient.id)
    this.setState({search: ingredientName})
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
  let {ingredients} = this.props

  let filteredIngredients =  ingredients.filter(({ingredient}) => ingredient.toLowerCase().includes(search.toLowerCase()) && ingredient != search)
  return (
    <div className='form-group'>
        <input type='text' className="form-control" name='search' placeholder='Ingredient' value={search} onChange={this.updateSearch.bind(this)}/>
        <button onClick={this.toggleShowOptions.bind(this)}>{showOptions ? 'Hide' : 'Show'}</button>
        {(showOptions || (search.length != 0 && !ingredients.find(({ingredient}) => ingredient == search)))
        &&
        <div className="ingredientSearchResults" style={{height: '15vh', overflow: 'scroll'}}>
        {filteredIngredients.map(({ingredient}, i) => (
          <p onClick={() => this.selectIngredient(ingredient)} key={i}>{ingredient}</p>
        ))}
      </div>
      }
      <Link to='/'>home</Link>
    </div>
  )
 }
}

function matchStateToProps(state) {
  return {ingredients: state.ingredients}
}

export default connect(matchStateToProps)(Ingredients)

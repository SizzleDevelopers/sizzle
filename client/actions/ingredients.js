import request from '../utils/api'

export const receiveIngredients = (ingredients) => {
  return {type: 'GET_INGREDIENTS', ingredients}
}

export function getIngredients() {
  return (dispatch) => {
    request('get', '/ingredients').then(res => {
      dispatch(receiveIngredients(res.body))
    }).catch(err => console.error(err))

  }
}

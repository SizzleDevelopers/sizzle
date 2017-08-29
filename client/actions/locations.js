import request from '../utils/api'

export const receiveLocations = (locations) => {
  return {type: 'GET_LOCATIONS', locations}
}

export function getLocations() {
  return (dispatch) => {
    request('get','/locations')
    .then(res => {
      dispatch(receiveLocations(res.body))
    })
    .catch(err => console.error(err))

  }
}

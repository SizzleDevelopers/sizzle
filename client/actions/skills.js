import request from '../utils/api'

export const receiveSkills = (skills) => {
  return {type: 'GET_SKILLS', skills}
}

export function getSkills() {
  return (dispatch) => {
    request('get','/skills')
    .then(res => {
      dispatch(receiveSkills(res.body))
    })
    .catch(err => console.error(err))

  }
}

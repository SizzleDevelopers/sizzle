import request from '../utils/api'

export const recieveResource = (resources) => {
  return {type: 'GET_RESOURCE', resources}
}

export function postResource(resource, callback) {
  return (dispatch) => {
    request('post','/resources', resource)
    .then(res => {
      callback()
    })
    .catch(err => console.error(err))

  }
}

import request from '../utils/api'

export const recieveResource = (resources) => {
  return {type: 'GET_RESOURCE', resources}
}

export function postResource(resource) {
  return (dispatch) => {
    request('post','/resources', resource)
    .then(res => {
    })
    .catch(err => console.error(err))

  }
}

export const editResource = (resource) => {
  return (dispatch) => {
    request('post',`/resources/${resource.}`, resource)
    .then(res => {
    })
    .catch(err => console.error(err))

  }
}

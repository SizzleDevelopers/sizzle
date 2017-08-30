import request from '../utils/api'

export function postResource(resource, callback) {
  return (dispatch) => {
    request('post', '/resources', resource).then(res => {
      callback()
    }).catch(err => console.error(err))
  }
}

export const editResource = (resource) => {
  return (dispatch) => {
    request('put', `/resources/${resource.id}`, resource).then(res => {}).catch(err => console.error(err))
  }
}

export const receiveResources = (resources) => {
  return {
    type: 'RECEIVE_RESOURCES',
    resources
  }
}

export function getResources() {
  return (dispatch) => {
    request('get', '/resources')
      .then(res => {
        dispatch(receiveResources(res.body))
      })
      .catch(err => console.error(err))
  }
}

export const delResource = (id) => {
  return {
    type: 'DELETE_RESOURCE',
    id
  }
}

export function deleteResource(resource) {

  return (dispatch) => {
    request('delete', `/resources/${resource.id}`)
      .then(res => {
        dispatch(delResource(resource.id))
      })
      .catch(err => console.error(err))
  }
}
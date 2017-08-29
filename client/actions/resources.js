import request from '../utils/api'


export function postResource(resource, callback) {
  return (dispatch) => {
    request('post','/resources', resource)
    .then(res => {
      callback()
    })
    .catch(err => console.error(err))

  }
}

export const editResource = (resource) => {
  return (dispatch) => {
    request('put',`/resources/${resource.id}`, resource)
    .then(res => {
    })
    .catch(err => console.error(err))

  }
}

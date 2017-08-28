import request from '../utils/api'

export const receiveEvents = (events) => {
  return {type: 'RECEIVE_EVENTS', events}
}

export const addEvent = (event) => {
  return {type: 'ADD_EVENT', event}
}

export const removeEvents = (event) => {
  return {type: 'REMOVE_EVENT', event}
}

export function getEvents() {
  return (dispatch) => {
    request('get','/events')
    .then(res => {
      dispatch(receiveEvents(res.body))
    })
    .catch(err => console.error(err))
  }
}

export function createEvent(event) {
  return (dispatch) => {
    request('post','/events')
    .send(event)
    .then(res => {
      dispatch(addEvent(res.body))
    })
    .catch(err => console.error(err))
  }
}

export function removeEvent(event) {
  return (dispatch) => {
    request('delete',`/events/${event.id}`)
    .send(event)
    .then(res => {
      dispatch(removeEvent(res.body))
    })
    .catch(err => console.error(err))
  }
}
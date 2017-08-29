import request from '../utils/api'

const receiveEvents = (events) => {
  return {type: 'RECEIVE_EVENTS', events}
}

const addEvent = (event) => {
  return {type: 'ADD_EVENT', event}
}

const deleteEvent = (event) => {
  return {type: 'DELETE_EVENT', event}
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
    request('post','/events', event)
    .then(res => {
      dispatch(addEvent(res.body))
    })
    .catch(err => console.error(err))
  }
}

export function removeEvent(event) {
  return (dispatch) => {
    request('delete',`/events/${event.id}`, event)
    .then(res => {
      dispatch(deleteEvent(res.body))
    })
    .catch(err => console.error(err))
  }
}

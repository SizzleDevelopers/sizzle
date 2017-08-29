export default function events (state = [], action) {
  switch (action.type) {
    case 'DELETE_EVENT':
      return state.filter((event) => event.id != action.event.id)
    case 'RECEIVE_EVENTS':
      return action.events
    case 'ADD_EVENT':
      return [...state, action.event]
    default:
      return state
  }
}

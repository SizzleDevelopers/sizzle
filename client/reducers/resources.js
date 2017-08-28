export default function resources (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_RESOURCES':
      return action.resources
    default:
      return state
  }
}

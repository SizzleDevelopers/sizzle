export default function resources (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_RESOURCES':
      return action.resources
      break;
      case 'DELETE_RESOURCE':
      return state.filter((resource) => resource.id != action.id)
    default:
      return state
  }
}

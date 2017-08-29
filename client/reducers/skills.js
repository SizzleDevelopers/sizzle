function skills (state = [], action) {
  switch (action.type) {
    case 'GET_SKILLS':
      return [...action.skills]
    default:
      return state
  }
}

export default skills

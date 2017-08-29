import request from '../utils/api'

export function postAttendance(attendance) {
  return (dispatch) => {
    request('post','/attendance', attendance)
    .then(res => {
    })
    .catch(err => console.error(err))
  }
}

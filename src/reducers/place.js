import * as types from '../constants/ActionTypes'

export default function place(state='gymnasium', action) {
  switch (action.type) {
    case types.SELECT_PLACE:
      return action.place
    default:
      return state
  }
}

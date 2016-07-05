import * as types from '../constants/ActionTypes'
import moment from 'moment';

const initState = moment()


export default function date(state=initState, action) {
  switch (action.type) {
    case types.NEXT_DAY:
      return moment(state).add(1, 'd')
    case types.PREVIOUS_DAY:
      return moment(state).add(-1, 'd')
    default:
      return state
  }
}


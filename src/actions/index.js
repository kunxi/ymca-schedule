import * as types from '../constants/ActionTypes'

export function selectPlace(place) {
  return {type: types.SELECT_PLACE, place}
}

export function nextDay() {
  return {type: types.NEXT_DAY}
}

export function previousDay() {
  return {type: types.PREVIOUS_DAY}
}

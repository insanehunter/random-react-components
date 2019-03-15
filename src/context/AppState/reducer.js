import {
  SET_TITLE,
  SET_BACK_BUTTON_TEXT,
  SET_BACK_BUTTON_HISTORY,
  SET_LEFT_HEADER_BUTTONS,
  SET_RIGHT_HEADER_BUTTONS
} from './constants'

export default function reducer(state, { type, payload }) {
  switch (type) {
    case SET_TITLE:
      return { ...state, title: payload }
    case SET_BACK_BUTTON_TEXT:
      return { ...state, backButtonText: payload }
    case SET_BACK_BUTTON_HISTORY:
      return { ...state, backButtonHistory: payload }
    case SET_LEFT_HEADER_BUTTONS:
      return { ...state, leftHeaderButtons: payload }
    case SET_RIGHT_HEADER_BUTTONS:
      return { ...state, rightHeaderButtons: payload }
    default:
      throw new Error()
  }
}

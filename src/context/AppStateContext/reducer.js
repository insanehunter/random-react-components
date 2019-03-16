import {
  SET_TITLE,
  PUSH_TITLE_TO_HISTORY,
  POP_LAST_SAVED_TITLE,
  SET_LEFT_HEADER_BUTTONS,
  SET_RIGHT_HEADER_BUTTONS
} from './constants'

export default function reducer(state, { type, payload }) {
  switch (type) {
    case SET_TITLE:
      return { ...state, title: payload }
    case PUSH_TITLE_TO_HISTORY:
      return { ...state, visitedPages: state.visitedPages.concat(state.title) }
    case POP_LAST_SAVED_TITLE:
      return { ...state, visitedPages: state.visitedPages.slice(0, -1) }
    case SET_LEFT_HEADER_BUTTONS:
      return { ...state, leftHeaderButtons: payload }
    case SET_RIGHT_HEADER_BUTTONS:
      return { ...state, rightHeaderButtons: payload }
    default:
      throw new Error()
  }
}

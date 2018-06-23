import {
  RECEIVE_EVENT,
  RECEIVE_EVENT_ERRORS
} from '../actions/event_actions';
import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/modal_actions';

const eventErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case RECEIVE_EVENT:
    case OPEN_MODAL:
    case CLOSE_MODAL:
      return [];
    default:
      return state;
  }
};

export default eventErrorsReducer;

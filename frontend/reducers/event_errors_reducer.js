import {
  RECEIVE_EVENT,
  RECEIVE_EVENT_ERRORS
} from '../actions/event_actions';

const eventErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case RECEIVE_EVENT:
      return [];
    default:
      return state;
  }
};

export default eventErrorsReducer;

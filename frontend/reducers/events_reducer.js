import {
  RECEIVE_EVENTS,
  RECEIVE_ADDITIONAL_EVENTS,
  REMOVE_EVENT
} from '../actions/event_actions';
import { merge } from 'lodash';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_ADDITIONAL_EVENTS:
      return merge({}, state, action.events);
    case REMOVE_EVENT:
      let newState = Object.assign({}, state);
      delete newState[action.eventId];
      return newState;
    default:
      return state;
  }
};

export default eventsReducer;

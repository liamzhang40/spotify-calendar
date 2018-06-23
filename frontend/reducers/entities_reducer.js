import { combineReducers } from 'redux';
import eventsReducer from './events_reducer';

const entitiesReducer = combineReducers({
  events: eventsReducer
});

export default entitiesReducer;

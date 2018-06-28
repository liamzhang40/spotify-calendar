import { combineReducers } from 'redux';
import eventsReducer from './events_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  events: eventsReducer,
  users: usersReducer
});

export default entitiesReducer;

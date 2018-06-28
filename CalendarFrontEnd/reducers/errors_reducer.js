import { combineReducers } from 'redux';
import eventErrorsReducer from './event_errors_reducer';

const errorsReducer = combineReducers({
  events: eventErrorsReducer
});

export default errorsReducer;

import * as eventAPIUtil from '../util/event_api_util';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_ADDITIONAL_EVENTS = 'RECEIVE_ADDITIONAL_EVENTS';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';

const receiveEvents = events => {
  return {
    type: RECEIVE_EVENTS,
    events
  };
};

const receiveEvent = event => {
  return {
    type: RECEIVE_EVENT,
    event
  };
};

const receiveAdditionalEvents = events => {
  return {
    type: RECEIVE_ADDITIONAL_EVENTS,
    events
  };
};

const deleteEvent = eventId => {
  return {
    type: REMOVE_EVENT,
    eventId
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_EVENT_ERRORS,
    errors
  };
};

export const fetchEvents = (year, month) => {
  return dispatch => {
    return eventAPIUtil.fetchEvents(year, month).then(
      events => {
        return dispatch(receiveEvents(events));
      }
    );
  };
};

export const fetchAdditionalEvent = (year, month) => {
  return dispatch => {
    return eventAPIUtil.fetchEvent(year, month).then(
      events => {
        return dispatch(receiveAdditionalEvents(events));
      }
    );
  };
};

export const createEvent = event => {
  return dispatch => {
    return eventAPIUtil.createEvent(event).then(
      event => {
        return dispatch(receiveEvent(event));
      },
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};

export const updateEvent = event => {
  return dispatch => {
    return eventAPIUtil.updateEvent(event).then(
      event => {
        return dispatch(receiveEvent(event));
      },
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};

export const removeEvent = eventId => {
  return dispatch => {
    return eventAPIUtil.removeEvent(eventId).then(
      () => {
        return dispatch(deleteEvent(eventId));
      }
    );
  };
};

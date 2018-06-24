import { connect } from 'react-redux';
import EventForm from './event_form';
import { updateEvent, removeEvent } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  // duplicating the event to avoid it being changed in Redux state too
  const event = Object.assign({}, ownProps.event);
  event.start_time = event.start_time.slice(11, 16);
  event.end_time = event.end_time.slice(11, 16);

  return {
    event,
    formType: "Edit Event"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: event => dispatch(updateEvent(event)),
    removeEvent: eventId => dispatch(removeEvent(eventId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

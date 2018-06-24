import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent } from '../../actions/event_actions';

const mapStateToProps = state => {
  return {
    event: {
      start_time: '00:00',
      end_time: '00:00',
      description: ''
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: event => dispatch(createEvent(event))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

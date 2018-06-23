import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent } from '../../actions/event_actions';

const mapStateToProps = state => {
  return {
    event: {
      start_time: '',
      end_time: '',
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

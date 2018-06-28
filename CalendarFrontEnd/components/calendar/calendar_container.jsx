import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import Calendar from './calendar';

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: (year, month) => dispatch(fetchEvents(year, month))
  };
};

export default connect(null, mapDispatchToProps)(Calendar);

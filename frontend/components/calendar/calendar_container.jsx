import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import Calendar from './calendar';

const mapStateToProps = state => {
  return {
    currentUser: Object.values(state.entities.users)[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: (year, month) => dispatch(fetchEvents(year, month))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

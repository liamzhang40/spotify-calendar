import { connect } from 'react-redux';
import { fetchEvents, fetchAdditionalEvents } from '../../actions/event_actions';
import WeekView from './week_view';

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: (year, month) => dispatch(fetchEvents(year, month)),
    fetchAdditionalEvents: (year, month) => dispatch(fetchAdditionalEvents(year, month))
  };
};

export default connect(null, mapDispatchToProps)(WeekView);

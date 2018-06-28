import { connect } from 'react-redux';
import EventIndex from './event_index';

const mapStateToProps = (state, ownProps) => {
  const events = Object.values(state.entities.events).filter(event => {
    const eventMonth = event.start_time.slice(5, 7);
    const eventDate = event.start_time.slice(8, 10);

    return ownProps.date === parseInt(eventDate) &&
    ownProps.month + 1 === parseInt(eventMonth);
  });
  return {
    events
  };
};

export default connect(mapStateToProps)(EventIndex);

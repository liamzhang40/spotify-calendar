import { connect } from 'react-redux';
import EventIndex from './event_index';

const mapStatetoProps = (state, ownProps) => {
  const events = Object.values(state.entities.events).filter(event => {
    const eventDate = event.start_time.slice(8, 10);
    if (ownProps.date < 10) {
      return "0" + ownProps.date === eventDate;
    }

    return ownProps.date === parseInt(eventDate);
  });
  return {
    events
  };
};

export default connect(mapStatetoProps)(EventIndex);

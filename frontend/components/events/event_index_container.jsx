import { connect } from 'react-redux';
import EventIndex from './event_index';

const mapStateToProps = (state, ownProps) => {
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

// const mapDispatchToProps = dispatch => {
//   return {
//   };
// };

export default connect(mapStateToProps)(EventIndex);

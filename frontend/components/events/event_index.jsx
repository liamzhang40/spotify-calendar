import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //sorting event according to start_time
    const events = this.props.events.sort((event1, event2) =>
      event1.start_time.slice(11, 19) > event2.start_time.slice(11, 19)
    ).map((event, idx) =>
      <li key={ idx }><EventIndexItem event={ event } /></li>
    );

    return (
      <div>
        <ul>
          {events}
        </ul>
      </div>
    );
  }
}

export default EventIndex;

import React from 'react';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { event } = this.props;
    const timeRange = `${event.start_time.slice(11, 19)} - ${event.end_time.slice(11, 19)}`;
    return (
      <div>{timeRange}</div>
    );
  }
}

export default EventIndexItem;

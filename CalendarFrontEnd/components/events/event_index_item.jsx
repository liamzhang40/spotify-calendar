import React from 'react';
import UpdateEventFormContainer from './update_event_form_container';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({visible: !this.state.visible});
  }

  render() {
    const { year, month, date, event, view } = this.props;
    const timeRange = `${event.start_time.slice(11, 16)} -- ${event.end_time.slice(11, 16)}`;
    return (
      <div onClick={ this.toggleModal }>
        { timeRange }
        <br />
        { view === "week-view" ? `Description: ${event.description}` : ""}
        { this.state.visible &&
          <UpdateEventFormContainer
            year={ year }
            month={ month }
            date={ date }
            event={ event }
            toggleModal={ this.toggleModal }/>}
      </div>
    );
  }
}

export default EventIndexItem;

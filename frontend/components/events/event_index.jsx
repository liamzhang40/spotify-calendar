import React from 'react';
import EventIndexItem from './event_index_item';
import CreateEventFormContainer from './create_event_form_container';

class EventIndex extends React.Component {
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
    //sorting event according to start_time
    const { year, month, date } = this.props;
    const events = this.props.events.sort((event1, event2) =>
      event1.start_time.slice(11, 19) > event2.start_time.slice(11, 19)
    ).map((event, idx) =>
      <li key={ idx }><EventIndexItem event={ event } /></li>
    );

    return (
      <div onClick={ this.toggleModal }>
        { this.props.date }
        <ul onClick={ e => e.stopPropagation() }>
          { events }
        </ul>

        { this.state.visible &&
          <CreateEventFormContainer
            year={ year }
            month={ month }
            date={ date }
            toggleModal={ this.toggleModal }/>}

      </div>
    );
  }
}

export default EventIndex;

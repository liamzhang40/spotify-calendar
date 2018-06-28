import React from 'react';
import EventDetail from './event_detail';
import UpdateEventFormContainer from './update_event_form_container';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      detailVisible: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.openDetail = this.openDetail.bind(this);
    this.closeDetail = this.closeDetail.bind(this);
  }

  toggleModal() {
    this.setState({modalVisible: !this.state.modalVisible});
  }
  // having one toggle detail causes rendering bug sometimes
  openDetail() {
    this.setState({detailVisible: true});
  }

  closeDetail() {
    this.setState({detailVisible: false});
  }

  render() {
    const { year, month, date, event, view } = this.props;
    const timeRange = `${event.start_time.slice(11, 16)} -- ${event.end_time.slice(11, 16)}`;
    return (
      <div onClick={ this.toggleModal }
        onMouseEnter={ this.openDetail }
        onMouseOut={ this.closeDetail }>
        { timeRange }
        { view === "calendar-view" &&
          this.state.detailVisible &&
          <EventDetail
            event={ event }/>}
        <br />
        { view === "week-view" && `Description: ${event.description}`}
        { this.state.modalVisible &&
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

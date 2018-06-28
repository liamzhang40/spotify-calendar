import React from 'react';
import * as dateUtil from '../../util/date_util';
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
    const { year, month, date, view, events } = this.props;

    switch (view) {
      case "calendar-view":
        const calendarEvents = events.sort((event1, event2) =>
          event1.start_time.slice(11, 19) > event2.start_time.slice(11, 19)
        ).map((event, idx) =>
          <li key={ idx }
            className="event-item"><EventIndexItem
            year={ year }
            month={ month }
            date={ date }
            event={ event }
            view={ view }/></li>
        );

        return (
          <div onClick={ this.toggleModal }>
            { date }
            <ul onClick={ e => e.stopPropagation() }>
              { calendarEvents }
            </ul>

            { this.state.visible &&
              <CreateEventFormContainer
                year={ year }
                month={ month }
                date={ date }
                toggleModal={ this.toggleModal }/>}
              </div>
            );

      case "week-view":
        const weekEvents = events.sort((event1, event2) =>
          event1.start_time.slice(11, 19) > event2.start_time.slice(11, 19)
        ).map((event, idx) => {
          const start_hour = parseInt(event.start_time.slice(11, 13));
          const start_min = parseInt(event.start_time.slice(14, 16));
          const end_hour = parseInt(event.end_time.slice(11, 13));
          const end_min = parseInt(event.end_time.slice(14, 16));
          const eventStyle = {
            top: `${start_hour * 37 + start_min / 15 * 12 + 13}px`,
            height: `${end_min >= start_min ?
              (end_hour - start_hour) * 37 + (end_min - start_min) / 15 * 12:
              (end_hour - start_hour - 1) * 37 + (end_min + 60 - start_min) / 15 * 12}px`
          };

          return <li key={ idx }
            className="event-item"
            style={eventStyle}><EventIndexItem
            year={ year }
            month={ month }
            date={ date }
            event={ event }
            view={view}/></li>;
        });

        return (
          <div onClick={ this.toggleModal }>
            { `${dateUtil.months[month]} ${date}` }
            <ul onClick={ e => e.stopPropagation() }>
              { weekEvents }
            </ul>

            { this.state.visible &&
              <CreateEventFormContainer
                year={ year }
                month={ month }
                date={ date }
                toggleModal={ this.toggleModal }/>}
              </div>
            );
      default:
        return;
    }

  }
}

export default EventIndex;

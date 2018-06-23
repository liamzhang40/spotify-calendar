import React from 'react';
import * as dateUtil from '../../util/date_util';
import CalendarHeader from './calendar_header';
import EventIndexContainer from '../events/event_index_container';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.date = new Date();
    this.state = {
      month: this.date.getMonth(),
      year: this.date.getFullYear()
    };
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  componentWillUpdate(nextProps, nextState) {
    // will fetch events again for preceding rendered month

  }

  generateTableBody() {
    const { month, year } = this.state;
    const firstDay = new Date(year, month).getDay();
    let monthLength = dateUtil.daysInMonth[month];
    if (month === 1) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        monthLength = 29;
      }
    }

    const days = dateUtil.days.map((day, index) => {
      return (<td key={ index }>{ day }</td>);
    });

    const dates = [];
    let date = 1;
    for (let i = 0; i < 6; i++) {
      if (date > monthLength) break;
      let datesRow = [];
      for (var j = 0; j < 7; j++) {
        // start incrementing at first date of the month and preceding dates
        if (j === firstDay || date > 1) {
          datesRow.push(<td key={ j }>
                          <EventIndexContainer date={ date }/>
                        </td>);
          date += 1;
        } else {
          datesRow.push(<td key={ j }></td>);
        }

        if (j === 6 || date > monthLength) dates.push(<tr
          className="calendar-dates"
          key={ i }>{ datesRow }</tr>);
        if (date > monthLength) break;
      }
    }

    return (
      <tbody>
        <tr className="calendar-header"><CalendarHeader
          parentState={this.state}
          setParentState={this.setState.bind(this)}
          /></tr>
        <tr className="calendar-days">{ days }</tr>
        { dates }
      </tbody>
    );
  }

  render() {
    return (
      <table>
        { this.generateTableBody() }
      </table>
    );
  }
}

export default Calendar;

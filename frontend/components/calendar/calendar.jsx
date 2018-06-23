import React from 'react';
import * as dateUtil from '../../util/date_util';
import CalendarHeader from './calendar_header';
import EventIndex from '../events/event_index';

class Calendar extends React.Component {
  constructor() {
    super();
    this.date = new Date();
    this.state = {
      month: this.date.getMonth(),
      year: this.date.getFullYear()
    };
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
    let day = 1;
    for (let i = 0; i < 6; i++) {
      if (day > monthLength) break;
      let datesRow = [];
      for (var j = 0; j < 7; j++) {
        // start incrementing at first day of the month and preceding days
        if (j === firstDay || day > 1) {
          datesRow.push(<td key={ j }>{ day }<EventIndex /></td>);
          day += 1;
        } else {
          datesRow.push(<td key={ j }></td>);
        }

        if (j === 6 || day > monthLength) dates.push(<tr
          className="calendar-dates"
          key={ i }>{ datesRow }</tr>);
        if (day > monthLength) break;
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

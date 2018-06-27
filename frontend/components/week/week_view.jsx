import React from 'react';
import * as dateUtil from '../../util/date_util';
import CalendarHeader from '../calendar/calendar_header';

class WeekView extends React.Component {
  constructor() {
    super();
    this.date = new Date();

    this.state = {
      year: this.date.getFullYear(),
      month: this.date.getMonth()
    };
  }

  generateTableBody() {
    const { month, year } = this.state;
    let firstDateOfWeek = this.date.getDate() > this.date.getDay() ?
    this.date.getDate() - this.date.getDay() :
    dateUtil.daysInMonth[month - 1] + (this.date.getDate() - this.date.getDay());

    const days = dateUtil.days.map((day, index) => {
      const dateOfWeek = firstDateOfWeek;
      if (this.date.getDate() > this.date.getDay()) {
        if (firstDateOfWeek <= dateUtil.daysInMonth[month]) {
          firstDateOfWeek += 1;
          return  (<td key={ index }>
            { `${day.slice(0, 3)} ${dateUtil.months[month]} ${dateOfWeek}` }
          </td>);
        } else {
          firstDateOfWeek += 1;
          return  (<td key={ index }>
            { `${day.slice(0, 3)} ${dateUtil.months[month + 1]} ${dateOfWeek % dateUtil.daysInMonth[month]}` }
          </td>);
        }
      } else {
        if (firstDateOfWeek <= dateUtil.daysInMonth[month - 1]) {
          firstDateOfWeek += 1;
          return  (<td key={ index }>
            { `${day.slice(0, 3)} ${dateUtil.months[month - 1]} ${dateOfWeek}` }
          </td>);
        } else {
          firstDateOfWeek += 1;
          return  (<td key={ index }>
            { `${day.slice(0, 3)} ${dateUtil.months[month]} ${dateOfWeek % dateUtil.daysInMonth[month - 1]}` }
          </td>);
        }
      }
    });

    return (
      <tbody>
        <tr className="calendar-header"><CalendarHeader
          parentState={this.state}
          setParentState={this.setState.bind(this)}
          /></tr>
        <tr className="week-days">{ days }</tr>
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

export default WeekView;

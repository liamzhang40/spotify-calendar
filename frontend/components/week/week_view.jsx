import React from 'react';
import * as dateUtil from '../../util/date_util';
import CalendarHeader from '../calendar/calendar_header';
import { withRouter } from 'react-router-dom';

class WeekView extends React.Component {
  constructor() {
    super();
    this.date = new Date();
    let month = this.date.getMonth();
    let firstDateOfWeek = this.date.getDate() - this.date.getDay();
    if (this.date.getDate() <= this.date.getDay()) {
      month -= 1;
      firstDateOfWeek += dateUtil.daysInMonth[month];
    }

    this.state = {
      year: this.date.getFullYear(),
      month,
      firstDateOfWeek
    };
  }

  generateTableBody() {
    const { month, year, firstDateOfWeek } = this.state;
    let dateOfWeek = firstDateOfWeek;

    const days = dateUtil.days.map((day, index) => {
      const currentDate = dateOfWeek;
        if (dateOfWeek <= dateUtil.daysInMonth[month]) {
          dateOfWeek += 1;
          return  (<td key={ index }>
            { `${day.slice(0, 3)} ${dateUtil.months[month]} ${currentDate}` }
          </td>);
        } else {
          dateOfWeek += 1;
          return  (<td key={ index }>
            { `${day.slice(0, 3)} ${dateUtil.months[month + 1]} ${currentDate % dateUtil.daysInMonth[month]}` }
          </td>);
        }
    });

    return (
      <tbody>
        <tr>
          <th colSpan={6}></th>
          <th>
            <button onClick={ () => this.props.history.push('/')}>Calendar View</button>
          </th>
        </tr>
        <tr className="calendar-header"><CalendarHeader
          parentState={this.state}
          setParentState={this.setState.bind(this)}
          view="week-view"
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

export default withRouter(WeekView);

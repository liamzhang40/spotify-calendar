import React from 'react';
import * as dateUtil from '../../util/date_util';
import CalendarHeader from './calendar_header';
import EventIndexContainer from '../events/event_index_container';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.date = new Date();

    this.state = {
      year: this.date.getFullYear(),
      month: this.date.getMonth()
    };
  }

  componentDidMount() {
    this.props.fetchEvents(this.state.year, this.state.month);
  }

  componentWillUpdate(nextProps, nextState) {
    this.props.fetchEvents(nextState.year, nextState.month);
  }

  generateTableBody() {
    const { month, year } = this.state;
    const firstDayOfMonth = new Date(year, month).getDay();
    let monthLength = dateUtil.daysInMonth[month];
    if (month === 1) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        monthLength = 29;
      }
    }

    const days = dateUtil.days.map((day, index) => <td key={ index }>{ day }</td>);

    const dates = [];
    let date = 1;
    for (let i = 0; i < 6; i++) {
      if (date > monthLength) break;
      let datesRow = [];
      for (var j = 0; j < 7; j++) {
        // start incrementing at first date of the month and preceding dates
        if (j === firstDayOfMonth || date > 1) {
          datesRow.push(<td key={ j }>
                          <EventIndexContainer
                            year={ year }
                            month={ month }
                            date={ date }
                            view="calendar-view"/>
                        </td>);
          date += 1;
        } else {
          datesRow.push(<td className="calendar-empty-dates" key={ j }></td>);
        }

        if (j === 6 || date > monthLength) dates.push(<tr
          className="calendar-dates"
          key={ i }>{ datesRow }</tr>);
        if (date > monthLength) break;
      }
    }

    return (
      <tbody>
        <tr>
          <th colSpan={6}></th>
          <th>
            <button onClick={ () => this.props.history.push('/week')}>Week View</button>
          </th>
        </tr>
        <tr className="calendar-header"><CalendarHeader
          parentState={this.state}
          setParentState={this.setState.bind(this)}
          view="calendar-view"/></tr>
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

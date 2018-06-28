import React from 'react';
import { withRouter } from 'react-router-dom';
import * as dateUtil from '../../util/date_util';
import CalendarHeader from '../calendar/calendar_header';
import EventIndexContainer from '../events/event_index_container';

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

  componentWillUpdate(nextProps, nextState) {
    this.props.fetchEvents(nextState.year, nextState.month);
  }

  generateTableBody() {
    const { month, year, firstDateOfWeek } = this.state;
    let dateOfWeek = firstDateOfWeek;

    const days = dateUtil.days.map((day, index) => <td key={ index }>{ day }</td>);
    days.unshift(<td key={-1}></td>);

    const timeBlocks = [<li className="placeholder" key={-1}>{"placeholder"}</li>];
    for (let i = 0; i < 25; i++) {
      if (i === 0 || i === 24) {
        timeBlocks.push(<li className="time-block" key={ i }>{"12AM"}</li>);
      } else if (i === 12) {
        timeBlocks.push(<li className="time-block" key={ i }>{"12PM"}</li>);
      } else if (i < 12){
        timeBlocks.push(<li className="time-block" key={ i }>{`${i % 12}AM`}</li>);
      } else {
        timeBlocks.push(<li className="time-block" key={ i }>{`${i % 12}PM`}</li>);
      }
    }

    const dates = [<td key={-1}><ul>{ timeBlocks }</ul></td>];
    for (let i = 0; i < 7; i++) {
      const currentDate = dateOfWeek;
      if (dateOfWeek <= dateUtil.daysInMonth[month]) {
        dateOfWeek += 1;
        dates.push(<td key={ i }>
                    <EventIndexContainer
                      year={ year }
                      month={ month }
                      date={ currentDate }
                      view="week-view"/>
                   </td>);
      } else {
        dateOfWeek += 1;
        dates.push(<td key={ i }>
                    <EventIndexContainer
                      year={ year }
                      month={ month }
                      date={ currentDate }
                      view="week-view"/>
                   </td>);
      }
    }

    return (
      <tbody>
        <tr>
          <th colSpan={7}></th>
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
        <tr className="week-dates">{ dates }</tr>
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

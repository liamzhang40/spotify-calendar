import React from 'react';
import * as dateUtil from '../../util/date_util';

const CalendarHeader = ({ parentState, setParentState, view }) => {

  let { year, month, firstDateOfWeek } = parentState;
  const monthName = dateUtil.months[month];
  const monthYear = `${monthName} ${year}`;

  switch (view) {
    case "calendar-view":
      const switchMonth = value => {
        return () => {
          month += value;
          if (month === 12) {
            year += 1;
            month = 0;
          } else if (month === -1) {
            year -= 1;
            month = 11;
          }
          setParentState({
            year,
            month
          });
        };
      }
      return (
        <th colSpan={7}>
          <div className="switch-button" onClick={switchMonth(-1)}>◀︎</div>
          <div className="calendar-header-content">{monthYear}</div>
          <div className="switch-button" onClick={switchMonth(1)}>►</div>
        </th>
      );

    case "week-view":
      const switchWeek = value => {
        return () =>{
          firstDateOfWeek += value
          if (firstDateOfWeek <= 0) {
            month -= 1;
            if (month === -1) {
              year -= 1;
              month = 11;
            }
            firstDateOfWeek += dateUtil.daysInMonth[month];
          } else if (firstDateOfWeek > dateUtil.daysInMonth[month]) {
            firstDateOfWeek -= dateUtil.daysInMonth[month];
            month += 1;
            if (month === 12) {
              year += 1;
              month = 0;
            }
          }
          setParentState({
            year,
            month,
            firstDateOfWeek
          })
        }
      }
      return (
        <th colSpan={8}>
          <div className="switch-button" onClick={switchWeek(-7)}>◀︎</div>
          <div className="calendar-header-content">{monthYear}</div>
          <div className="switch-button" onClick={switchWeek(7)}>►</div>
        </th>
      );
    case "day-view" :
    default:
      return;
  }

};

export default CalendarHeader;

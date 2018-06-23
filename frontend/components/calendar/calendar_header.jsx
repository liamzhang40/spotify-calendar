import React from 'react';
import * as dateUtil from '../../util/date_util';

const CalendarHeader = ({ parentState, setParentState }) => {

  const { date, month, year } = parentState;
  const monthName = dateUtil.months[month];
  const monthYear = `${monthName} ${year}`;

  const handleClick = (value) => {
    return () => {
      let newYear = year;
      let newMonth = (month + value) % 12;

      if (month === 11 && value === 1) {
        newYear = year + 1;
      } else if (month === 0 && value === -1) {
        newYear = year - 1;
        newMonth = 11;
      }
      console.log(newMonth)
      setParentState({
        month: newMonth,
        year: newYear
      });
    };
  }


  return (
    <th colSpan={7}>
      <span className="switch-button"
        onClick={handleClick(-1)}>◀︎</span>
      <span className="calendar-header-content">{monthYear}</span>
      <span className="switch-button"
        onClick={handleClick(1)}>►</span>
    </th>
  );
};

export default CalendarHeader;

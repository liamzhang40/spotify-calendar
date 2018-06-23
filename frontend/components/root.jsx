import React from 'react';
import { Provider } from 'react-redux';
import CalendarContainer from './calendar/calendar_container';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <CalendarContainer />
    </Provider>
  );
};

export default Root;

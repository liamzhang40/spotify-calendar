import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import CalendarContainer from './calendar/calendar_container';
import WeekView from './week/week_view';

const App = () => {
  return (
    <div>
      <GreetingContainer />
      <Route path="/" exact component={CalendarContainer} />
      <Route path="/week" component={WeekView} />
    </div>
  );
};

export default App;

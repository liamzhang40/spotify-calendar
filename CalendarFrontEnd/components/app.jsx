import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import CalendarContainer from './calendar/calendar_container';
import WeekViewContainer from './week/week_view_container';

const App = () => {
  return (
    <div>
      <GreetingContainer />
      <Route path="/" exact component={CalendarContainer} />
      <Route path="/week" component={WeekViewContainer} />
    </div>
  );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom';

import Calendar from './components/calendar/calendar';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(
    <h1>
      Welcome to Calendar test
      <Calendar />
    </h1>, root
    );
});

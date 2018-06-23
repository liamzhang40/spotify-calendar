import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchEvents } from './actions/event_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const preloadedState = {
    entities: {
      users: { [window.currentUser.id]: window.currentUser}
    }
  };
  const store = configureStore(preloadedState);
  delete window.currentUser;
  
  ReactDOM.render(
    <Root store={ store }/>, root
    );


  window.getState = store.getState;
  window.dispatch = store.dispatch;
});

window.fetchEvents = fetchEvents;

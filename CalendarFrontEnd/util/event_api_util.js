export const fetchEvents = (year, month) => {
  return $.ajax({
    method: 'GET',
    url: 'api/events',
    data: { event: { year, month }}
  });
};

export const createEvent = event => {
  return $.ajax({
    method: 'POST',
    url: 'api/events',
    data: { event }
  });
};

export const updateEvent = event => {
  return $.ajax({
    method: 'PATCH',
    url: `api/events/${event.id}`,
    data: { event }
  });
};

export const removeEvent = eventId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/events/${eventId}`,
  });
};

import axios from 'axios';

export const fetchEvents = (count, page) =>
  axios.get(`http://localhost:5001/myevents?count=${count}&page=${page}`);
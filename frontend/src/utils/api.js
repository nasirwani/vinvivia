import axios from 'axios';

export const fetchEvents = (count, page,sort) =>
  axios.get(`http://localhost:5001/myevents?count=${count}&page=${page}&sort=${sort.sort},${
    sort.order
  }`);
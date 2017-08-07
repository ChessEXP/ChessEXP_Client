import axios from 'axios';

const API_URL = 'http://localhost:3001/';

export function getEvents() {
  return axios.get(`${API_URL}events`);
}

export function getGoals() {
  return axios.get(`${API_URL}goals`)
}

export function getPositions() {
  return axios.get(`${API_URL}positions`)
}

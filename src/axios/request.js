import axios from 'axios';

const API_URL = 'https://chessexp.herokuapp.com/';

export function getEvents() {
  return axios.get(`${API_URL}events`);
}

export function getGoals() {
  return axios.get(`${API_URL}goals`)
}

export function getPositions() {
  return axios.get(`${API_URL}positions`)
}

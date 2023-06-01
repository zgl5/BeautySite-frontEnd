import sendRequest from './send-request';
const BASE_URL = `https://beautysite-backend.onrender.com/user`
//const BASE_URL = 'http://localhost:3001/user';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}
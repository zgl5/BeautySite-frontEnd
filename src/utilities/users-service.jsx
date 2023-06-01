import * as usersAPI from "./users-api";

export async function signUp(userData) {

    const token = await usersAPI.signUp(userData);
 // Persist the token to localStorage
  localStorage.setItem("token", token);
  return getUser();
}

export async function login(credentials) {
  //console.log('we are in users-service', credentials)
  const token = await usersAPI.login(credentials)
  //Persist the token to localStorage
  localStorage.setItem("token", token);
  return getUser();
}

export function getToken() {
   const token = localStorage.getItem("token");
// getItem will return null if no key
  if (!token) return null;
  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split(".")[1]));
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function logOut() {
  localStorage.removeItem('token')
}


import jwtDecode from "jwt-decode";
const TOKEN_ID = "_token";
export const setToken = token => {
  localStorage.setItem(TOKEN_ID, token);
  return token;
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_ID) || null;
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_ID);
};

export const isAuthenticated = () => {
  return getToken();
};

export const getProfile = () => {
  const token = getToken();

  if (!token) return false;
  return jwtDecode(token);
};

import sendRequest from "./sendRequest";
import { localStorageApi } from "../index";

export function login(data) {
  return sendRequest(`oauth/login`, {
    data: JSON.stringify(data)
  });
}

export function register(data) {
  return sendRequest(`oauth/token`, {
    data: JSON.stringify(data)
  });
}

export function refreshToken(refresh_token, token) {
  return sendRequest(`oauth`, {
    method: "PUT",
    data: {
      refresh_token,
      token
    }
  });
}

export const Device = {
  get() {
    return sendRequest(`device`, {
      method: "GET",
      headers: {
        Authorisation: `Bearer ${localStorageApi.getItem("token")}`
      }
    });
  }
};

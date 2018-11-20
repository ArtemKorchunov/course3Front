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

// Device CRUD
export const Device = {
  get(page = 0, count = 5) {
    return sendRequest(`device`, {
      method: "GET",
      params: {
        page,
        count
      },
      headers: {
        Authoriation: `Bearer ${localStorageApi.getItem("token")}`
      }
    });
  },
  create(data) {
    return sendRequest(`device`, {
      method: "POST",
      data,
      headers: {
        Authoriation: `Bearer ${localStorageApi.getItem("token")}`
      }
    });
  },
  update(data, id) {
    return sendRequest(`device/${id}`, {
      method: "PUT",
      data,
      headers: {
        Authoriation: `Bearer ${localStorageApi.getItem("token")}`
      }
    });
  },
  delete(id) {
    return sendRequest(`device/${id}`, {
      method: "DELETE",
      headers: {
        Authoriation: `Bearer ${localStorageApi.getItem("token")}`
      }
    });
  }
};

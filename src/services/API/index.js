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

export function refreshToken(refreshToken, token) {
  return sendRequest(`oauth/token`, {
    method: "PUT",
    data: {
      refreshToken,
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
        Authorization: `Bearer ${localStorageApi.getItem("token")}`
      }
    });
  },
  getById(id) {
    return sendRequest(`device/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorageApi.getItem("token")}`
      }
    });
  },
  create(data) {
    return sendRequest(`device`, {
      method: "POST",
      data,
      headers: {
        Authorization: `Bearer ${localStorageApi.getItem("token")}`
      }
    });
  },
  update(data, id) {
    return sendRequest(`device/${id}`, {
      method: "PUT",
      data,
      headers: {
        Authorization: `Bearer ${localStorageApi.getItem("token")}`
      }
    });
  },
  delete(id) {
    return sendRequest(`device/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorageApi.getItem("token")}`
      }
    });
  }
};

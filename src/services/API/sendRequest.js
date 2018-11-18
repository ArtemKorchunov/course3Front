import axios from "axios";
import getRootUrl from "./getRootUrl";
import { localStorageApi } from "../index";
import { refreshToken } from "./index";

async function sendRequest(path, opts = {}) {
  const headers = Object.assign({}, opts.headers || {}, {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${localStorageApi.getItem()}`
  });

  //Check for valid token
  if (headers["access-token"]) {
    const refresh_token = localStorageApi.getItem("refresh_token");
    const expires = +localStorageApi.getItem("expires_in");
    if (expires - Date.now() < 600000) {
      const {
        data: { token, expires_in }
      } = await refreshToken(refresh_token, headers["access-token"]);
      localStorageApi.setItem("expires_in", expires_in);
      localStorageApi.setItem("token", token);
      headers["access-token"] = token;
    }
  }

  try {
    return await axios(
      `${getRootUrl()}${path}`,
      Object.assign({ method: "POST" }, opts, { headers })
    );
  } catch (error) {
    throw error.response;
  }
}
export default sendRequest;

import axios from "axios";
import getRootUrl from "./getRootUrl";
import { localStorageApi } from "../index";
import { refreshToken as refreshTokenRequest } from "./index";

async function sendRequest(path, opts = {}) {
  const headers = Object.assign({}, opts.headers || {}, {
    "Content-type": "application/json; charset=UTF-8"
  });
  //Check for valid token
  if (headers["Authorization"]) {
    const refresh_token = localStorageApi.getItem("refreshToken");
    const expires = +localStorageApi.getItem("expiresIn");
    if (expires - Date.now() < 60000) {
      const {
        data: {
          data: { token, expiresIn, refreshToken }
        }
      } = await refreshTokenRequest(
        refresh_token,
        localStorageApi.getItem("token")
      );
      localStorageApi.setItem("expiresIn", expiresIn);
      localStorageApi.setItem("token", token);
      localStorageApi.setItem("refreshToken", refreshToken);
      headers["Authorization"] = `Bearer ${token}`;
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

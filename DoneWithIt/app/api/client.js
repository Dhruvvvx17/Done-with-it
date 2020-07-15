import { create } from "apisauce";

import cache from "../utility/cache";
import authStorage from "../auth/authStorage";

// handle to the backend for the app
const apiClient = create({
  baseURL: "http://192.168.0.108:9000/api",
});

// adding the auth-token to requests
apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  // if fetching data from server was successful, return data directly
  if (response.ok) {
    cache.store(url, response.data);
    console.log("Loading listings from - SERVER");
    return response;
  }
  console.log("Server error. Trying cache...");

  // If fetching data from server was unsuccessful
  // Get from cache
  const data = await cache.get(url);
  console.log("Loading listings from - CACHE");
  return data ? { ok: true, data } : response;
};

export default apiClient;

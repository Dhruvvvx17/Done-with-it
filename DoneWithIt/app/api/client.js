import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.0.109:9000/api",
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

  // If fetching data from server was unsuccessful
  // Get from cache
  const data = await cache.get(url);
  console.log("Loading listings from - CACHE");
  return data ? { ok: true, data } : response;
};

export default apiClient;

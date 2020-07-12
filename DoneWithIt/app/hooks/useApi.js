import { useState } from "react";

export default useApi = (apiFunc) => {
  // state variable to store listings, fetched from the backend
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // An async function calling the getListings() API call.
  // Once data is recieved, state variable is updated
  const request = async () => {
    // trigger the loading indicator
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);

    if (!response.ok) {
      setError(true);
      return;
    }

    setError(false);
    setData(response.data);
  };

  return { data, error, loading, request };
};

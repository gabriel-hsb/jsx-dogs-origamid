import { useState, useCallback } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const request = useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setIsFetching(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setIsFetching(false);
      return { response, json };
    }
  }, []);

  return {
    data,
    isFetching,
    error,
    request,
  };
};

export default useFetch;

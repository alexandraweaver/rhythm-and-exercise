import { useState, useEffect } from "react";
// `npm install axios` before starting the server
import axios from "axios";

function useAxiosUD() {
    // This holds the result of an API call
  const [data, setData] = useState(null);
//   This holds the URL that's sent from a component
  const [url, setUrl] = useState("");
//   This holds an error status based on the results of an axios search
  const [error, setError] = useState(null);
//   This holds the loading status that's sent from a component
  const [loading, setLoading] = useState(false);

  const options = {
    method: 'GET',
    url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
    params: {term: 'wat'},
    headers: {
      'X-RapidAPI-Key': 'a054780b92mshf12c82438e97d4ap13639fjsn55bf18d18623',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };

  async function customFetch() {
    try {
      const response = await axios.request(options);

      console.log(response.data);

      setData(response.data);
      setLoading(false);
      setError(null);

    } catch (error) {
      console.error(error);
      if (error.response.status === 404) {
        setError("data not found");
        setData(null);
        setLoading(false);
      } else {
        setError(error.message);
        setData(null);
        setLoading(false);
      }
    }
  }

//   When we use setLoading from another component, this useEffect sees the change in state. If loading is true, then it performs the customFetch function. Else, nothing happens.
  useEffect(() => {
    if (loading) {
      customFetch(url);
    }
  }, [loading]);

  return [setUrl, data, loading, setLoading, error];
}

export default useAxiosUD;
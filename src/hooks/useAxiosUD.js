import { useState, useEffect } from "react";
// `npm install axios` before starting the server
import axios from "axios";

function useAxiosUD() {
    // This holds the result of an API call
  const [dataUD, setDataUD] = useState(null);
//   This holds the URL that's sent from a component
  const [urlUD, setUrlUD] = useState("");

  const [paramsUD, setParamsUD] = useState("");

//   This holds an error status based on the results of an axios search
  const [errorUD, setErrorUD] = useState(null);
//   This holds the loading status that's sent from a component
  const [loadingUD, setLoadingUD] = useState(false);

  const options = {
    method: 'GET',
    url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
    params: {term: paramsUD},
    headers: {
      'X-RapidAPI-Key': 'a054780b92mshf12c82438e97d4ap13639fjsn55bf18d18623',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };

  async function customFetch() {
    try {
      const response = await axios.request(options);

      console.log(response.data);

      setDataUD(response.data);
      setLoadingUD(false);
      setErrorUD(null);

    } catch (error) {
      console.error(error);
      if (error.response.status === 404) {
        setErrorUD("data not found");
        setDataUD(null);
        setLoadingUD(false);
      } else {
        setErrorUD(error.message);
        setDataUD(null);
        setLoadingUD(false);
      }
    }
  }

//   When we use setLoading from another component, this useEffect sees the change in state. If loading is true, then it performs the customFetch function. Else, nothing happens.
  useEffect(() => {
    if (loadingUD) {
      customFetch();
    }
  }, [loadingUD]);

  return [setParamsUD, dataUD, loadingUD, setLoadingUD, errorUD];
}

export default useAxiosUD;
import { useState, useEffect } from "react";
import axios from "axios";

const useAjax2 = () => {
  const [options, setOptions] = useState({});
  const [response, setResponse] = useState({});
  const [errors, setErrors] = useState(null);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function ajax() {
      //if no options are given, then jump out of the request
      if (!options) {
        return;
      }

      try {
        //make request to axios
        const res = await axios(options);
        //set our data from axios
        setResponse(res.data);
      } catch (e) {}
    }
    ajax();
  }, [options]);

  //TODO: configure the ability to pass the above method/action/state around
  return [setOptions];
};
export default useAjax2;

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { API, TIMEOUT_HTTP_REQUEST } from "constants/constants";

// global config for axios
axios.defaults.baseURL = API.BASE_URL;
axios.defaults.timeout = TIMEOUT_HTTP_REQUEST;
axios.defaults.headers["Content-Type"] = "application/json";

const AxiosRequest = {
  CHECK_SESSION: ({ cancelSource }) => {
    return axios.get(API.CHECK_SESSION, {
      cancelToken: cancelSource.token
    });
  },

  SIGNIN: (payload, cancelSource) => {
    return axios.post(API.SIGNIN, payload, {
      cancelToken: cancelSource.token
    });
  }
};

// custom hook for handling request lifecycle
const useHttpService = type => {
  const unmounted = useRef(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  let source = axios.CancelToken.source();

  function send(payload) {
    if (AxiosRequest[type]) {
      if (!unmounted.current) {
        setData(null);
        setLoading(true);
      }
      AxiosRequest[type](payload, source)
        .then(response => {
          if (!unmounted.current) {
            setData(response.data);
            setLoading(false);
          }
        })
        .catch(e => {
          if (!unmounted.current) {
            setError(true);
            setLoading(false);
            if (axios.isCancel(e)) {
              console.log(`request cancelled:${e.message}`);
            } else {
              console.log("another error happened:" + e.message);
            }
          }
        });
    } else {
      console.warn("No service found");
    }
  }

  function abort() {
    source.cancel();
  }

  useEffect(() => {
    return () => {
      unmounted.current = true;
      source.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { send, abort, data, loading, error };
};

export default useHttpService;

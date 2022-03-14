import { useState } from 'react';

import axios from 'axios';

const useHTTP = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const request = (url, options) => {
    axios
      .get(url, options)
      .then(response => {
        const data = response.data.result;

        setResponse({
          id: data.code,
          original: data['original_link'],
          shorten: data['full_short_link'],
        });
      })
      .catch(error => {
        setError('Something went wrong, try again with valid link!');
      });
  };

  const resetError = () => {
    setError(null);
  };

  return {
    request,
    response,
    error,
    resetError,
  };
};

export default useHTTP;

import { useState, useEffect } from 'react';

const useFetchData = (api) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(api)
     .then(response => response.json())
     .then(data => setData(data))
     .catch(error => setError(error));
  }, [api]);

  return [data, error];
}

export default useFetchData;
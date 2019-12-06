import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export function useGetAPIResource(url: string, dispatchResponse: Function) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(response => {
        dispatch(dispatchResponse(response.data));
        setLoading(false);
      })
      .catch(error => {
        setError(error.toJSON());
        setLoading(false);
      });
  }, [dispatch, url, dispatchResponse]);

  return { loading, error };
}

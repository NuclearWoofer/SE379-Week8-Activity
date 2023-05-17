import { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:3000';

interface Props {
  url: string;
  data: string;
  loading: boolean;
  error: string;
}

export const useFetch = (url: string): Props => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}${url}`);
        setData(response.data as string);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

import { useState, useEffect } from "react";

const useFetch = <T>(url: string): T => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [url]);

  return data as T;
};

export default useFetch;

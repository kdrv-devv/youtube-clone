import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = ({ url, method = "GET", Data }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios({
      url: `${import.meta.env.VITE_BASE_URL}/${url}`,
      method,
      body: Data,
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => {
        setData(data.data), setLoading(false);
      })
      .catch((error) => {
        setError(error.message), setLoading(false);
      });
  }, []);
  return {data,loading,error}
};

export default useAxios;

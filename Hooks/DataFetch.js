import { useState, useEffect } from "react";
import axios from "axios";


const DataFetch = (endpoint, query) => {
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(data);
  const options = {
    method: "GET",
    url: `https://newsdata.io/api/1/news?apikey=pub_2239027188f79e2e451fa7a2d13c6958564aa&q=business`
  };

  const DataFetch = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.results);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
   DataFetch();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    DataFetch();
  };

  return { data, isLoading, error, refetch };

};

export default DataFetch;
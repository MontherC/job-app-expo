import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";


const rapidApiKey = RAPID_API_KEY;


const useFetch = (endpoint, query )=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
      url: `https://tenders.guru/api/ro/tenders/${endpoint}`,
      method: 'GET',
      headers: {    Accept: 'application/json',
      'Content-Type': 'application/json',
      },
      maxContentLength: 2000,
      maxBodyLength: 2000,
      params:{
        ...query,
        _limit: 10
      }
      }
      
      const fetchData = async()=>{
        setIsLoading(true);
        try {
          const res = await axios.request(options);
          setData(res.data.data);
          setIsLoading(false);
        } catch (err) {
          setError(err);
          console.log(err.response.data)
          alert(err);
        } finally{
          setIsLoading(false);
        }
      }

      useEffect(() => {
        fetchData();
      }, [])

      const refetch = () =>{
        setIsLoading(true);
        fetchData();
      }

      return { data, isLoading, error};
}

export default useFetch;
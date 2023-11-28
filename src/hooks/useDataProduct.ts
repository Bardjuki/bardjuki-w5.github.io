import { useEffect, useState } from 'react'
import apiClientStore from '../sevices/api-client-store'
import { AxiosRequestConfig, CanceledError } from 'axios'

const useDataProduct = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
      apiClientStore
        .get(endpoint, { signal: controller.signal, ...requestConfig})
        .then((res) => {
            setData(res.data);
            setLoading(false); 
        })
        .catch((err) =>{
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        }); 
        
        return () => controller.abort();
    }, deps ? [...deps] : []);

    return { data, error, isLoading};
};

export default useDataProduct
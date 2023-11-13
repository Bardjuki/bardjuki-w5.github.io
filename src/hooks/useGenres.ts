// import { CanceledError } from "axios";
// import { useEffect, useState } from "react";
// import apiClient from "../sevices/api-client";

// export interface Genre {
//     id: number;
//     name: string;

// }

// interface FetchGenresResponse {
//     count: number;
//     results: Genre[];
// }
// const useGenres = () => {
//     const [genres, setGames] = useState<Genre[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setLoading] = useState(false);
  
//     useEffect(() => {
//         const controller = new AbortController();

//         setLoading(true);
//       apiClient
//         .get<FetchGenresResponse>("/genres", { signal: controller.signal})
//         .then((res) => {
//             setGames(res.data.results);
//             setLoading(false); 
//         })
//         .catch((err) =>{
//             if (err instanceof CanceledError) return;
//             setError(err.message)
//             setLoading(false);
//         }); 
        
//         return () => controller.abort();
//     }, []);

//     return { genres, error, isLoading};
// };

// export default useGenres;

// ------useData

import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
}

const useGenres = () => useData<Genre>('/genres'); 

export default useGenres;
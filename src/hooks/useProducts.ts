// import { useEffect, useState } from "react";
// import { CanceledError } from "axios";
// import apiClientStore from "../sevices/api-client-store";


// export interface Product {
//     id: number;
//     title: string;
//     images: string;
// }

//  const useProducts = () => {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setLoading] = useState(false);
  
//     useEffect(() => {
//         const controller = new AbortController();

//         setLoading(true);
//       apiClientStore
//         .get("/api/v1/products", { signal: controller.signal})
//         .then((res) => {
//             setProducts(res.data);
//             setLoading(false); 
//         })
//         .catch((err) =>{
//             if (err instanceof CanceledError) return;
//             setError(err.message)
//             setLoading(false);
//         }); 
        
//         return () => controller.abort();
//     }, []);

//     return { data: products, error , isLoading};
// }

// export default useProducts;

// -----
import { ProductQuery } from "../Pages/Store";
import useDataProduct from "./useDataProduct";

export interface Product{
    id: number;
    title: string;
    images: string;
}
// const useProducts = () => useDataProduct<Product>('/api/v1/products')
const useProducts = (productQuery: ProductQuery) => 
    useDataProduct<Product>(
        "/api/v1/products", 
        {
         params: { 
            category: productQuery.category?.id, 
            search: productQuery.searchText
         },
        }, 
        [productQuery]
        );

export default useProducts;
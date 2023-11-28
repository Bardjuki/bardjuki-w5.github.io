// import { SimpleGrid, Text } from "@chakra-ui/react";
// import useProducts from "../hooks/useProducts";
// import ProductCardContainer from "./ProductCardContainer";
// import ProductCardSkeleton from "./ProductCardSkeleteon";
// import ProductCard from "./ProductCard";

// const ProductGrid = () => {
//     const { products, error, isLoading } = useProducts();
//     const skeletons = [1, 2, 3, 4, 5, 6];
//     return (
//     <>
//         {error && <Text>{error}</Text>}
//         <SimpleGrid
//         columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
//         padding="10px"
//         spacing={10}
//         >
//         {isLoading &&
//             skeletons.map((skeleton) => (
//             <ProductCardContainer key={skeleton}>
//                 <ProductCardSkeleton />
//             </ProductCardContainer>
//             ))}
//         {products.map((product) => (
//             <ProductCardContainer key={product.id}>
//             <ProductCard product={Image} />
//             </ProductCardContainer>
//         ))}
//         </SimpleGrid>
//     </>
//     );
// };

// export default ProductGrid;

// ------

// import { useEffect, useState } from "react";
// import apiClientStore from "../sevices/api-client-store";
// import { Image, Text } from "@chakra-ui/react";
// import { CanceledError } from "axios";

// interface Product {
//   id: number;
//   title: string;
//   images: string;
//   price: string;
//   name: string;
// }

// const ProductGrid = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true);
//     apiClientStore
//       .get("/products", { signal: controller.signal })
//       .then((res) => {
//         setProducts(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return (
//     <>
//       {error && <Text>{error}</Text>}
//       <div>{products.name}</div>
//       <div>
//         {products.map((product) => (
//           <div key={product.id}>
//             <Image src={product.image} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductGrid;

// ------

import { SimpleGrid, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import { ProductQuery } from "../Pages/Store";

interface Props {
  productQuery: ProductQuery;
}

const ProductGrid = ({ productQuery }: Props) => {
  const { data, error } = useProducts(productQuery);

  if (error) return <Text>{error}</Text>;
  return (
    <>
      <SimpleGrid columns={5} spacing={10}>
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;

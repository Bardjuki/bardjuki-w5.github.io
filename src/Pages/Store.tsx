import { Grid, GridItem, Show } from "@chakra-ui/react";
import ProductGrid from "../components-store/ProductGrid";
import NavBar from "../components-store/Navbar";
import { useState } from "react";
import ProductCategory from "../components-store/ProductCategory";
import { Category } from "../hooks/useProductCategories";

export interface ProductQuery {
  searchText: any;
  category: Category | null;
}
function Store() {
  const [productQuery, setproductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setproductQuery({ ...productQuery, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <ProductCategory
            selectedCategory={productQuery.category}
            onSelectCategory={(category) =>
              setproductQuery({ ...productQuery, category })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <ProductGrid productQuery={productQuery} />
      </GridItem>
    </Grid>
  );
}

export default Store;

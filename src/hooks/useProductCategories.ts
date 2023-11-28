import useDataProduct from "./useDataProduct";

export interface Category{
    id: number;
    name: string;
    image: string;
}

const useProductCategories = () => useDataProduct<Category>('/api/v1/categories')

export default useProductCategories;
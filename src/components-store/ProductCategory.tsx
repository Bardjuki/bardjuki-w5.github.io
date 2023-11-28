import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import useProductCategories, { Category } from "../hooks/useProductCategories";

interface Props {
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category | null;
}

const ProductCategory = ({ selectedCategory, onSelectCategory }: Props) => {
  const { data, error } = useProductCategories();

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl">Genres</Heading>
      <List>
        {data.map((category) => (
          <ListItem key={category.id} paddingY="5px">
            <HStack>
              {category.name}
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={category.image}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  category.id === selectedCategory?.id ? "bold" : "normal"
                }
                onClick={() => onSelectCategory(category)}
                fontSize="lg"
                variant="link"
              >
                {category.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ProductCategory;

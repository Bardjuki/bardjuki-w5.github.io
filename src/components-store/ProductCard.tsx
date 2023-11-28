import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Product } from "../hooks/useProducts";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card
      w={200}
      h={300}
      key={product.id}
      borderRadius={10}
      overflow={"hidden"}
    >
      <Image h={40} src={product.images} alt="product" />
      <CardBody>
        <Heading fontSize="18">{product.title}</Heading>
      </CardBody>
    </Card>
  );
};
export default ProductCard;

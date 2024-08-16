import { useContext } from "react";
import { ShopContext } from "../Context/shopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const products = all_product.find((e) => e.id === Number(productId));

  if (!products) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrum product={products} />
      {/* Additional product details can be added here */}
    </div>
  );
};

export default Product;

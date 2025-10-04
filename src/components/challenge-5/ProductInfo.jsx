const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: 1200,
    availability: "In Stock",
  };
  return (
    <div>
      <ul>
        <li>Product Name : {product.name}</li>
        <li>Product Price : ${product.price}</li>
        <li>Product Availability : {product.availability}</li>
      </ul>
    </div>
  );
};
export default ProductInfo;

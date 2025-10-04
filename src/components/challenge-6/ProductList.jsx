const products = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Smartphone", price: 499.99 },
  { id: 3, name: "Tablet", price: 299.99 },
];
const ProductList = () => {
  return (
    <section>
      {products.map(({ id, name, price }) => (
        <ul key={id}>
          <li>Product Name : {name}</li>
          <li>Product Price : ${price.toFixed(2)}</li>
        </ul>
      ))}
    </section>
  );
};

export default ProductList;

const Product = (props) => {
  return (
    <section>
      <h2>Product's Name : {props.name}</h2>
      <p>Product's Price : Rs.{props.price}</p>
    </section>
  );
};
export default Product;

// using destructure
// const Product = ({name,price}) => {
//   return (
//     <section>
//       <h2>Product's Name : {name}</h2>
//       <p>Product's Price : Rs.{price}</p>
//     </section>
//   );
// };
// export default Product;

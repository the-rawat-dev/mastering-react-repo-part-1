const Person = (props) => {
  return (
    <section>
      <h2>Person's Name : {props.name}</h2>
      <p>Person's Age : {props.age}</p>
    </section>
  );
};
export default Person;

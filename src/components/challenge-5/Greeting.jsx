const Greeting = () => {
  const name = "John";
  const date = new Date();

  return (
    <div>
      <h1>Welcome {name}</h1>
      <p>Current Date : {date.toLocaleDateString()}</p>
    </div>
  );
};

export default Greeting;

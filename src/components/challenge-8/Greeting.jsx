const Greeting = ({ timeOfDay }) => {
  return timeOfDay === "morning" ? (
    <h2>Good Morning</h2>
  ) : timeOfDay === "afternoon" ? (
    <h2>Good Afternoon</h2>
  ) : timeOfDay === "evening" ? (
    <h2>Good Evening</h2>
  ) : timeOfDay === "night" ? (
    <h2>Good Night</h2>
  ) : (
    <h2>Invalid Input</h2>
  );
};
export default Greeting;

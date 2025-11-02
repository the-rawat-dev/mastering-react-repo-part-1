import Greeting from "./components/challenge-8/Greeting";
import UserStatus from "./components/challenge-8/UserStatus";
import Weather from "./components/challenge-8/Weather";

function App() {
  return (
    <div>
      {/* Weather component  */}
      <Weather temperature={10} />
      <Weather temperature={20} />
      <Weather temperature={40} />
      {/* UserStatus component */}
      <UserStatus loggedIn={true} />
      <UserStatus loggedIn={false} />
      <UserStatus isAdmin={true} loggedIn={true} />

      {/* Greeting component */}
      <Greeting timeOfDay="morning" />
      <Greeting timeOfDay="afternoon" />
      <Greeting timeOfDay="evening" />
      <Greeting timeOfDay="night" />
    </div>
  );
}
export default App;

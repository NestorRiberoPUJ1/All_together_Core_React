import React from "react";
import PersonCard from "./components/PersonCard/PersonCard";
class App extends React.Component {

  render() {
    return (
      <div className="container">
        <PersonCard firstName="Bob" lastName="Dylan" age="50" hairColor="black" />
        <PersonCard firstName="Mark" lastName="Jacobs" age="52" hairColor="blonde" />
        <PersonCard firstName="Nicolas" lastName="Bijan" age="34" hairColor="black" />
        <PersonCard firstName="Elthon" lastName="John" age="68" hairColor="ginger" />
      </div>
    );
  }

}

export default App;

import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("daragdlaa");
  const name = " Radada Makqueen";

  const customStyle = {
    color: name.split(" ")[0] === "Queen" ? "#2ecc71" : "orange",
    fontSize: name.split(" ")[0] === "Queen" ? "56px" : "30px",
  };

  // function getGreeting(name) {
  //   if (name === undefined) {
  //     return <h1 style={customStyle}>Hello, {name}!</h1>;
  //   }
  //   return <h1 style={customStyle}>Hello, Stranger,</h1>;
  // }

  const title = <h1>Welcome to {name}'s website</h1>;

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={customStyle}>Hello, {name}!</h1>
      </header>
    </div>
  );
}

export default App;

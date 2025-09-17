import "./App.css";
import DisplayPerson from "./Components/DisplayPerson";
import HelloWorld from "./Components/HelloWorld";
import City from "./Components/City";

function App() {
  const sayHi = () => {
    console.log("sayHi");
  };
  const person = {
    name: "Kingsley",
    age: 28,
    gender: "M",
    height: 1870,
  };

  const getElement = () => {
    return <h1>Header2</h1>;
  };

  const element = <h1>Header</h1>;
  const bool = false;
  const isButtonEnable = true;
  const divStyle = {
    background: "lightblue",
    padding: "1em",
    fontWeight: "bold",
  };
  return (
    <>
      <City name="Newcastle">
        <div>
          Newcastle is a harbour city in the Australian state of New South
          Wales.
        </div>
        <div>
          <strong>Population:</strong> 322,278 (2016) not included Kingsley
        </div>
        <DisplayPerson {...person} customFunction={sayHi} />
        <HelloWorld name={"Nathan"} />
      </City>
    </>
  );
}

export default App;

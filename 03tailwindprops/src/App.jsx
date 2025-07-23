import "./App.css";
import Card from "./component/Card";

function App() {


  const myObject = {
    name: "Lokesh Das",
    age: 25,
    city: "Kolkata",
    country: "India",
  }
  const myArray = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className="text-3xl font-bold underline text-blue-500 mb-4 ">
        Lokesh Das
      </h1>
      <Card channel='Lokesh' objpass={myObject} arrpass={myArray}/>
      <Card />
    </>
  );
}

export default App;

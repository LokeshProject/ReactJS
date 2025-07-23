import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); 

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get("/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log("Response data:", response.data);
      }
    })();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {  
    return <h1>Error occurred while fetching data</h1>;
  }

  return (
    <>
      <h1>React and API</h1>
      <h2>number of product are:{products.length}</h2>
    </>
  );
}

export default App;

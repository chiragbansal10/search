import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import BeerList from "./components/BeerList";
function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchBeers() {
      try {
        const response = await fetch("https://api.punkapi.com/v2/beers");
        const data = await response.json();
        setBeers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchBeers();
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search beers"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <BeerList beers={beers} />
    </div>
  );
}

export default App;

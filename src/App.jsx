import { useEffect, useState } from "react";
import CardList from "../src/components/Card-list/CardList";
import Search from "./components/Search-Input/Search.component";
import './App.css';
import { Helmet } from "react-helmet";

const App = () => {
  const [founders, setFounders] = useState([]);
  const [filterFounder, setFilterFounder] = useState([founders]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setFounders(data)
        setFilterFounder(data)
      })
      .catch((err) => console.log("There was an error", err));
  }, []);

  const onChangeHandlers = (event) => {
     const searchString = event.target.value.toLowerCase();
      const newFilterFounders = founders.filter((founder) =>
        founder.name.toLowerCase().includes(searchString));
      setFilterFounder(newFilterFounders);
  }

  return (
    <div className="app-container">
      <Helmet>
        <title>Cartoon | Enjoy the show</title>
      </Helmet>
      <h1 className="app-title">Founder of Cartoon!</h1>
      <Search onChangeHandlers={onChangeHandlers} />
      <CardList founders={filterFounder} />
    </div>
  );  
};

export default App;
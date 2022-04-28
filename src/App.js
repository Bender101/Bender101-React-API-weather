import "./App.css";
import "./components/card/card.css";
import React from "react";
import Input from "./components/input/input";
import CardList from "./components/cardList/cardList";
import { useCities } from "./hooks/useCities";

export const Context = React.createContext();

function App() {
  const [state, dispatch] = useCities();
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="main">
        <Input />
        <CardList />
      </div>
    </Context.Provider>
  );
}

export default App;

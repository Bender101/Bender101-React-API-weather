import "./cardList.css";
import React, { useContext, useState } from "react";
import Card from "../card/card";
import { Context } from "../../App";

export default function CardList() {
  const {
    state: { cities },
  } = useContext(Context);
  const [order, setOrder] = useState("asc");

  let sortedCities = cities.sort();

  if (order === "desc") {
    sortedCities.reverse();
  }

  const changeHandler = (e) => {
    setOrder(e.target.value);
  };

  return (
    <>
      <select className="select" value={order} onChange={changeHandler}>
        <option value="asc">Название ↑</option>
        <option value="desc">Название ↓</option>
      </select>
      <div className="card-list">
        {sortedCities?.map((city) => (
          <Card key={city} city={city} />
        ))}
      </div>
    </>
  );
}

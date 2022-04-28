import "./card.css";
import React, { memo, useContext } from "react";
import { useWeather } from "../../hooks/useWeather";
import { Context } from "../../App";
import CardError from "../cardError/cardError";

const Card = memo(({ city }) => {
  const data = useWeather(city);
  const { dispatch } = useContext(Context);

  if (!data) return null;

  if (data.cod === '404') {
    return(
      <CardError city={city}/>
    )
  }
  
  const { name, weather, main } = data;
  const { description, icon } = weather[0];
  const { temp, humidity, feels_like } = main;

  const deleteHandler = () => {
    dispatch({
      type: "DELETE_CITY",
      payload: city,
    });
  };

  const editHandler = () => {
    dispatch({
      type: "EDIT_CITY",
      payload: city,
    });
  };

  return (
    <div className="card">
      <div className="action-button-wrap">
        <button className="action-button" onClick={editHandler}>
          ✐
        </button>
        <button className="action-button" onClick={deleteHandler}>
          ✖
        </button>
      </div>
      <div className="card__info">
        <img
          className="card__icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
        <div className="card__title">{name}</div>
        <div className="card__description">{description}</div>
        <div className="card__temperature">{temp.toFixed()}</div>
      </div>
      <div className="card__information">
        <div>Humidity: {humidity}</div>
        <div>Feels like: {feels_like}</div>
      </div>
    </div>
  );
});
export default Card;

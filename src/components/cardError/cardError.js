import './cardError.css'
import { useWeather } from "../../hooks/useWeather";
import { useContext } from "react";
import { Context } from "../../App";
const CardError = ({ city }) => {
  const data = useWeather(city);
  const { dispatch } = useContext(Context);

  if (!data) return null;

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
    <div className="card-error">
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
          src={
            "https://cdn.icon-icons.com/icons2/1302/PNG/512/sadsmiley_85787.png"
          }
          alt="oops :("
          width={"100px"}
          height={"100px"}
        />
        <div className="card__title">{city}</div>
        <div className="card__description">{data.message}</div>
        <div className="card__temperature">{data.cod}</div>
      </div>
      <div className="card__information">
        <div>Humidity: {"not found"}</div>
        <div>Feels like: {"not found"}</div>
      </div>
    </div>
  );
};
export default CardError;

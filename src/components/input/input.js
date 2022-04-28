import "./input.css";
import { useRef, useContext } from "react";
import { Context } from "../../App";

export default function Input() {
  const inputRef = useRef(null);
  const {
    dispatch,
    state: { inputValue, editingCity },
  } = useContext(Context);

  const handleOnAdd = (e) => {
    if (inputValue.length) {
      dispatch({
        type: "ADD_CITY",
        payload: inputValue,
      });
      dispatch({
        type: "RESET_INPUT_VALUE",
      });
      inputRef.current.focus();
    }
  };

  const handleOnDone = () => {
    if (inputValue.length) {
      dispatch({
        type: "EDIT_CITY_DONE",
        payload: inputValue,
      });
      dispatch({
        type: "RESET_INPUT_VALUE",
      });
      inputRef.current.focus();
    }
  };

  const handleOnChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT_VALUE",
      payload: e.target.value,
    });
  };

  return (
    <>
    <div >
      <img className="title-logo" width={"335px"} src={"./title.png"} />
    </div>
    <div className="input-wrapper">
      <input
        placeholder="Введите город"
        onChange={handleOnChange}
        className="input"
        value={inputValue}
        ref={inputRef}
      />
      {editingCity ? (
        <button className="button" onClick={handleOnDone}>
          Изменить
        </button>
      ) : (
        <button className="button" onClick={handleOnAdd}>
          Узнать погоду
        </button>
      )}
    </div>
    </>
  );
}

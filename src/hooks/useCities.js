import React, { useEffect, useReducer } from "react";

const initialState = {
  inputValue: "",
  editingCity: "",
  cities: JSON.parse(localStorage.getItem("cities")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CITY": {
      const newState = { ...state, cities: [...state.cities, action.payload] };
      return newState;
    }
    case "DELETE_CITY": {
      const oldArr = state.cities;
      const newArr = oldArr.filter((el) => el !== action.payload);
      return { ...state, cities: newArr };
    }
    case "EDIT_CITY": {
      return {
        ...state,
        inputValue: action.payload,
        editingCity: action.payload,
      };
    }
    case "EDIT_CITY_DONE": {
      const { editingCity } = state;
      const oldArr = state.cities;
      const filteredArr = oldArr.filter((el) => el !== editingCity);
      const newArr = [...filteredArr, action.payload];
      return {
        ...state,
        cities: newArr,
        inputValue: initialState.inputValue,
        editingCity: initialState.editingCity,
      };
    }
    case "CHANGE_INPUT_VALUE": {
      return { ...state, inputValue: action.payload };
    }
    case "RESET_INPUT_VALUE":
      return { ...state, inputValue: initialState.inputValue };
    default:
      return initialState;
  }
};

export const useCities = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cities } = state;

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  return [state, dispatch];
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);
  console.log(cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="text-center m-2">
          <h2>{cash}</h2>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => addCash(Number(prompt()))}
          className="btn btn-lg btn-outline-primary m-1"
        >
          Пополнить счет
        </button>
        <button
          onClick={() => getCash(Number(prompt()))}
          className="btn btn-lg btn-outline-primary m-1"
        >
          Снять со счета
        </button>
      </div>
    </div>
  );
}
export default App;

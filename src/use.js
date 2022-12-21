import { useReducer, useState } from "react";

export default function Use() {
  const [number, setNumber] = useState(1);
  function countReducer(oldCount, action) {
    if (action.type === "DOWN") {
      return oldCount - action.number;
    } else if (action.type === "RESET") {
      return 0;
    } else if (action.type === "UP") {
      return oldCount + action.number;
    }
  }
  const [count, counstDispatch] = useReducer(countReducer, 0);
  function down() {
    counstDispatch({ type: "DOWN", number: number });
  }
  function reset() {
    counstDispatch({ type: "RESET", number: number });
  }
  function up() {
    counstDispatch({ type: "UP", number: number });
  }
  const change = (e) => {
    setNumber(Number(e.target.value));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="button" value="-" onClick={down}></input>
        <input type="button" value="0" onClick={reset}></input>
        <input type="button" value="+" onClick={up}></input>
        <input type="text" text="number" value={number} onChange={change} />
        {count}
      </form>
    </div>
  );
}

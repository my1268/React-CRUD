import { useState } from "react";

export default function Gugudan() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
    }
    setResult("정답");
    setFirst(Math.ceil(Math.random() * 9));
    setSecond(Math.ceil(Math.random() * 9));
    setValue(""); } 
else{
    setResult("땡")
  }
  return (
    <>
      <div>
        {first}곱하기{second}는?
      </div>
      <form onSubmit={onSubmit}>
        <input type="number"></input>
        <button>클릭!</button>
      </form>
      <div>{result}</div>
    </>
  );
}

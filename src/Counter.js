import { React, useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState(0);

  function increaseValue() {
    setValue(value + 1);
  }

  return (
    <div className="form-control">
      <label>Contador:</label>
      <h1>{value}</h1>
      <br />
      <button type="submit" onClick={increaseValue}>
        Contar
      </button>
    </div>
  );
};

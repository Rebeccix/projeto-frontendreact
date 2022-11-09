import React from "react";
import { FilterStyle } from "./styles";

export default function Filter(props) {
  const { onChangeMin, onChangeMax, onChangeMame, filterValues } = props
  return (
    <FilterStyle>
      <p>Filter</p>
      <div>
        <label >Min:
          <input type="number" onChange={onChangeMin}/>
        </label><br></br>
        <label >Max:
          <input type="number" onChange={onChangeMax}/>
        </label><br></br>
        <label >nome:
          <input type="text" onChange={onChangeMame}/>
        </label>
        <button onClick={filterValues}>Filtrar</button>
      </div>
    </FilterStyle>
  );
}
import React from "react";
import { FilterStyle , ContainerFilter } from "./styles";

export default function Filter(props) {
  const { toggle, setFilterMin, setFilterMax, setFilterName, setSortItemsName} = props

  const onChangeMin = (current) => {
    setFilterMin(current.target.value)
  }

  const onChangeMax = (current) => {
    setFilterMax(current.target.value)
  }
  
  const onChangeMame = (current) => {
    setFilterName(current.target.value)
  }

  const onchangeSortName = (current) => {
    current.target.value === 'Crescente' ? setSortItemsName(1) : setSortItemsName(2)
    current.target.value === '' && setSortItemsName(0)
  }

  return (
    <FilterStyle>
      <ContainerFilter toggle={toggle}>
        <label>Min:
          <input type="number" onChange={(e) => onChangeMin(e)}/>
        </label><br></br>
        <label >Max:
          <input type="number" onChange={(e) => onChangeMax(e)}/>
        </label><br></br>
        <label >nome:
          <input type="text" onChange={(e) => onChangeMame(e)}/>
        </label>
        <p>Nome</p>
        <select onChange={onchangeSortName}>
          <option value="">Ordenar</option>
          <option value="Crescente">Crescente</option>
          <option value="Decrescente">Decrescente</option>
        </select>
      </ContainerFilter>
    </FilterStyle>
  );
}
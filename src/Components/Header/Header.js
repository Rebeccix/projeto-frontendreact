import React from "react";
import HeaderStyle from "./style";
import Cart from "../Cart/Cart";
import { useState } from 'react'

function Header(props) {

  const [nome, setNome] = useState()
  const [check, setCheck] = useState(false)

  function cart() {
    
    if (check === false) {
      setCheck(true)
      setNome(<Cart obj={props.obj}/>)
    } else {
      setCheck(false)
      setNome(<></>)
    }
  }

  return (
    <>
    <HeaderStyle>
      <img src="https://picsum.photos/100/100" alt="" />
      <div>
        <input type="text" name="" id="" />
      </div>
      <img onClick={cart}src="cart.png" alt="" />
    </HeaderStyle>
    {nome}
    </>
  );
}

export default Header
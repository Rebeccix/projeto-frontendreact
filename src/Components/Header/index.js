import React from "react";
import { HeaderStyle } from "./styles";
import img from "../../img/cart.png";


export default function Header(props) {
  const { hideShow, hideShowCart } = props
  return (
    <HeaderStyle>
      <span>
        <div onClick={hideShow}>|||</div>
        <h1 href="">Space Now</h1>
      </span>
      <img src={img} onClick={hideShowCart}></img>
    </HeaderStyle>
  );
}

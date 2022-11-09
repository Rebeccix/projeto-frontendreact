import Cart from "./Components/Cards";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Filter from "./Components/Filter";
import GlobalStyle from "./GlobalStyle";
import dataBase from "./dataBase";
import { useState } from "react";

function App() {
  const { items } = dataBase;

  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items)

  const addItem = (current) => {
    // const filtered = cart.filter(item => item.name !== current.name)
    // const mapa = cart.map((i) => i.includes(current))
    const duplicat = cart.find((i) => i.name === current.name);
    if (cart.length === 0) {
      setCart([{ ...current, amount: 1 }]);
    } else if (duplicat) {
      setCart(
        cart.map((item) =>
          item.name === current.name
            ? { ...current, amount: duplicat.amount + 1 }
            : item
        )
      );
    } else {
      cart.map(() =>
        setCart([...cart, { ...current, amount: current.amount + 1 }])
      );
    }

    // sum cart
    if (totalCart.length === 0) {
      setTotalCart(current.price);
    } else {
      setTotalCart(totalCart + current.price);
    }
  };

  const removeItem = (current) => {
    const filter = cart.filter((item) => item.name !== current.name);
    const duplicat = cart.find((i) => i.name === current.name);
    if (current.amount === 1) {
      setCart(filter);
    } else if (duplicat) {
      setCart(
        cart.map((item) =>
          item.name === current.name
            ? { ...current, amount: duplicat.amount - 1 }
            : item
        )
      );
    } else {
      cart.map(() =>
        setCart([...cart, { ...current, amount: current.amount - 1 }])
      );
    }
    setTotalCart(totalCart - current.price);
  };

  const onChangeMin = (current) => {
    const maped = items.filter(i => i.preco >= current.target.value)
    if (maped.length === 0) {
      setFilteredItems(items)
    } else {
      setFilteredItems(maped)
    }
  }

  const onChangeMax = (current) => {
    const maped = items.filter(i => i.preco <= current.target.value)
    if (maped.length === 0) {
      setFilteredItems(items)
    } else {
      setFilteredItems(maped)
    }
  }

  const onChangeMame = (current) => {
    const mapedName = items.filter(i => i.name === current.target.value)
    if (mapedName.length === 0) {
      setFilteredItems(items)
    } else {
      setFilteredItems(mapedName)
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <div className="teste">
        <Filter onChangeMin={onChangeMin} onChangeMax={onChangeMax} onChangeMame={onChangeMame}/>
        <Main filteredItems={filteredItems} addItem={addItem} />
        <Cart cart={cart} removeItem={removeItem} totalCart={totalCart} />
      </div>
    </>
  );
}

export default App;

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
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

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
    const filtered = items.filter(i => i.preco >= current.target.value)
    setFilteredItems(filtered)
    setMin(+current.target.value)
  }

  const onChangeMax = (current) => {
    const filtered = items.filter(i => i.preco <= current.target.value)
    setFilteredItems(filtered)
    setMax(+current.target.value)
  }
  
  const onChangeMame = (current) => {
    const filtered = items.filter(i => i.name === current.target.value)
    setFilteredItems(filtered)
  }

  const filterValues = () => {
    const filtered = items.filter(i => i.preco >= min && i.preco <= max)
    setFilteredItems(filtered)
  }
  
  return (
    <>
      <GlobalStyle />
      <Header />
      <div className="teste">
      <Filter filterValues={filterValues} onChangeMame={onChangeMame} onChangeMin={onChangeMin} onChangeMax={onChangeMax}/>
        <Main filteredItems={filteredItems} addItem={addItem} />
        <Cart cart={cart} removeItem={removeItem} totalCart={totalCart} />
      </div>
    </>
  );
}

export default App;
